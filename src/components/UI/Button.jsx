import constants from "../../../constant";

export default ({ children, type }) => {
 return (
  <button
   className={
    type == "Primary"
     ? constants.hero.button.primary
     : constants.hero.button.secondary
   }
  >
   {children}
  </button>
 );
};
