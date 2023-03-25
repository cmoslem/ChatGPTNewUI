import { defaultAPIEndpoint } from '@constants/auth';
import { StoreSlice } from './store';

export interface AuthSlice {
  apiKey?: string;
  apiFree: boolean;
  apiEndpoint: string;
  firstVisit: boolean;
  showMigration: boolean;
  setApiKey: (apiKey: string) => void;
  setApiFree: (apiFree: boolean) => void;
  setApiEndpoint: (apiEndpoint: string) => void;
  setFirstVisit: (firstVisit: boolean) => void;
  setShowMigration: (showMigration: boolean) => void;
}

export const createAuthSlice: StoreSlice<AuthSlice> = (set, get) => ({
  apiFree: false,
  apiEndpoint: defaultAPIEndpoint,
  firstVisit: true,
  showMigration: true,
  setApiKey: (apiKey: string) => {
    set((prev: AuthSlice) => ({
      ...prev,
      apiKey: apiKey,
    }));
  },
  setApiFree: (apiFree: boolean) => {
    set((prev: AuthSlice) => ({
      ...prev,
      apiFree: apiFree,
    }));
  },
  setApiEndpoint: (apiEndpoint: string) => {
    set((prev: AuthSlice) => ({
      ...prev,
      apiEndpoint: apiEndpoint,
    }));
  },
  setFirstVisit: (firstVisit: boolean) => {
    set((prev: AuthSlice) => ({
      ...prev,
      firstVisit: firstVisit,
    }));
  },
  setShowMigration: (showMigration: boolean) => {
    set((prev: AuthSlice) => ({
      ...prev,
      showMigration: showMigration,
    }));
  },
});
