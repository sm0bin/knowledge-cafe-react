import PropTypes from "prop-types";
const Bookmark = ({ bookmark }) => {
  return (
    <div className="p-5 bg-white rounded-lg">
      <h3 className="font-semibold text-lg">{bookmark}</h3>
    </div>
  );
};
Bookmark.propTypes = {
  bookmark: PropTypes.string.isRequired,
};
export default Bookmark;
