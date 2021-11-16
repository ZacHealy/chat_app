import classes from "./layout.module.css";

function Layout(props) {
  return (
    <div>
      <div className={classes.layout}>{props.children}</div>
      <div className={classes.background}></div>
    </div>
  );
}

export default Layout;
