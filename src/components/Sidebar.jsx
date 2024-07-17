/* eslint-disable react/prop-types */
const Sidebar = ({ className = "", data }) => {
  return (
    <div className={className}>
      <div>
        <span>{data.name}</span>&nbsp;
        <span>&#40;{data.sl}&#41;</span>
      </div>
    </div>
  );
};

export default Sidebar;
