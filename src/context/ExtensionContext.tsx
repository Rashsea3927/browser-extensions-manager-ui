import { data } from '@/data';
import { ExtensionItemType } from '@/types/extensionItem';
import { createContext, Dispatch, ReactNode, useContext, useReducer } from 'react';

type State = {
  filter: 'All' | 'Active' | 'Inactive';
  extensions: ExtensionItemType[];
  filteredExtensions: ExtensionItemType[]; // フィルタリング結果を保持
};

type Action = { type: 'SET_FILTER'; filter: 'All' | 'Active' | 'Inactive' } | { type: 'TOGGLE_ACTIVE'; id: number };

const initialState: State = {
  filter: 'All',
  extensions: data,
  filteredExtensions: data, // 初期状態ではすべてのデータを表示
};

const ExtensionContext = createContext<{ state: State; dispatch: Dispatch<Action> }>({
  state: initialState,
  dispatch: () => null,
});

const extensionReducer = (state: State, action: Action) => {
  switch (action.type) {
    case 'SET_FILTER':
      return {
        ...state,
        filter: action.filter,
        filteredExtensions: action.filter === 'All' ? state.extensions : state.extensions.filter((extension) => (action.filter === 'Active' ? extension.isActive : !extension.isActive)),
      };
    case 'TOGGLE_ACTIVE':
      const updatedExtensions = state.extensions.map((extension) => (extension.id === action.id ? { ...extension, isActive: !extension.isActive } : extension));
      return {
        ...state,
        extensions: updatedExtensions,
        filteredExtensions: state.filter === 'All' ? updatedExtensions : updatedExtensions.filter((extension) => (state.filter === 'Active' ? extension.isActive : !extension.isActive)),
      };
    default:
      return state;
  }
};

export const ExtensionProvider = ({ children }: { children: ReactNode }) => {
  const [state, dispatch] = useReducer(extensionReducer, initialState);

  return <ExtensionContext.Provider value={{ state, dispatch }}>{children}</ExtensionContext.Provider>;
};

export const useExtensionContext = () => {
  const context = useContext(ExtensionContext);
  if (!context) {
    throw new Error('useExtensionContext must be used within an ExtensionProvider');
  }
  return context;
};
