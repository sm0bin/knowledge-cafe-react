import PropTypes from "prop-types";
const Bookmark = ({ blogTitle }) => {
  return (
    <div className="p-5 bg-white rounded-lg">
      <h3 className="font-semibold text-lg">{blogTitle}</h3>
    </div>
  );
};
Bookmark.propTypes = {
  blogTitle: PropTypes.string.isRequired,
};
export default Bookmark;
