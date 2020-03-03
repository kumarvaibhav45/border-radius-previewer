export default (state, { type, payload }) => {
  switch (type) {
    case 'SET_DEMOHEIGHT':
      return {
        ...state,
        demoHeight: payload
      };
    case 'SET_DEMOWIDTH':
      return {
        ...state,
        demoWidth: payload
      };
    case 'SET_CUSTOMSIZE':
      return {
        ...state,
        customSize: !state.customSize
      };
    case 'SET_TOPLEFT':
      return {
        ...state,
        borderRadius: {
          ...state.borderRadius,
          topLeft: payload
        }
      };
    case 'SET_TOPRIGHT':
      return {
        ...state,
        borderRadius: {
          ...state.borderRadius,
          topRight: payload
        }
      };
    case 'SET_RIGHTTOP':
      return {
        ...state,
        borderRadius: {
          ...state.borderRadius,
          rightTop: payload
        }
      };
    case 'SET_RIGHTBOTTOM':
      return {
        ...state,
        borderRadius: {
          ...state.borderRadius,
          rightBottom: payload
        }
      };
    case 'SET_BOTTOMRIGHT':
      return {
        ...state,
        borderRadius: {
          ...state.borderRadius,
          bottomRight: payload
        }
      };
    case 'SET_BOTTOMLEFT':
      return {
        ...state,
        borderRadius: {
          ...state.borderRadius,
          bottomLeft: payload
        }
      };
    case 'SET_LEFTBOTTOM':
      return {
        ...state,
        borderRadius: {
          ...state.borderRadius,
          leftBottom: payload
        }
      };
    case 'SET_LEFTTOP':
      return {
        ...state,
        borderRadius: {
          ...state.borderRadius,
          leftTop: payload
        }
      };

    default:
      return state;
  }
};
