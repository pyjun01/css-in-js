import Sheet from "./sheet";
import domElements from "./domElements";

const sheet = new Sheet();

const getStyle = (styleStringArray, ...interpolations) => {
  const result = [styleStringArray[0]];

  for (let i = 0, len = interpolations.length; i < len; i++) {
    result.push(interpolations[i], styleStringArray[i + 1]);
  }

  return result.join("");
};

function styled(Tag) {
  return function templateFunction(styleStringArray, ...interpolations) {
    const style = getStyle(styleStringArray, ...interpolations);

    const styledClassName = sheet.generateClassName(style);

    return function WrappedStyledComponent({ children, ...props }) {
      return (
        <Tag
          {...props}
          className={styledClassName.concat(
            props.className ? ` ${props.className}` : ""
          )}
        >
          {children}
        </Tag>
      );
    };
  };
}

domElements.forEach((domElement) => {
  styled[domElement] = styled(domElement);
});

export default styled;
