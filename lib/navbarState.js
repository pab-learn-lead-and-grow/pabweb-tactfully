// lib/navbarState.js
// Consolidated navbar state management

export const initialNavbarState = {
  isOpen: false,
  showForm: false,
  user: null,
  hydrated: false,
  exploreOpen: false,
  topUnivOpen: false,
  moreOpen: false,
  mobileExploreOpen: false,
  mobileTopUnivOpen: false,
  selectedCategory: "Online MBA",
  selectedExploreCategory: "PG Courses",
  selectedExploreSubCategory: null,
};

export const navbarReducer = (state, action) => {
  switch (action.type) {
    case 'TOGGLE_MENU':
      return { ...state, isOpen: !state.isOpen };
    case 'CLOSE_MENU':
      return { ...state, isOpen: false };
    case 'TOGGLE_FORM':
      return { ...state, showForm: !state.showForm };
    case 'CLOSE_FORM':
      return { ...state, showForm: false };
    case 'SET_USER':
      return { ...state, user: action.payload };
    case 'SET_HYDRATED':
      return { ...state, hydrated: true };
    case 'TOGGLE_EXPLORE':
      return { ...state, exploreOpen: !state.exploreOpen };
    case 'TOGGLE_TOP_UNIV':
      return { ...state, topUnivOpen: !state.topUnivOpen };
    case 'TOGGLE_MORE':
      return { ...state, moreOpen: !state.moreOpen };
    case 'TOGGLE_MOBILE_EXPLORE':
      return { ...state, mobileExploreOpen: !state.mobileExploreOpen };
    case 'TOGGLE_MOBILE_TOP_UNIV':
      return { ...state, mobileTopUnivOpen: !state.mobileTopUnivOpen };
    case 'SET_CATEGORY':
      return { ...state, selectedCategory: action.payload };
    case 'SET_EXPLORE_CATEGORY':
      return { ...state, selectedExploreCategory: action.payload };
    case 'SET_EXPLORE_SUBCATEGORY':
      return { ...state, selectedExploreSubCategory: action.payload };
    case 'RESET_DROPDOWNS':
      return {
        ...state,
        exploreOpen: false,
        topUnivOpen: false,
        moreOpen: false,
        mobileExploreOpen: false,
        mobileTopUnivOpen: false,
      };
    default:
      return state;
  }
};

export const CATEGORY_SLUG_MAP = {
  "online-mba": "Online MBA",
  "online-bba": "Online BBA",
  "online-bca": "Online BCA",
  "online-bcom": "Online BCom",
  "online-mca": "Online MCA",
  "online-mcom": "Online MCom",
  "online-ma": "Online MA",
  "online-majmc": "Online MAJMC",
};