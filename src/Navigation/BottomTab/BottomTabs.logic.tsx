const useLogicForBottomTabs = {
  getIconByScreen: (name) => {
    switch (name) {
      case "Home":
        return "home";
      case "IncomingMessenges":
        return "envelope-o";
      case "Chat":
        return "comments-o";
    }
  },
};

export default useLogicForBottomTabs;
