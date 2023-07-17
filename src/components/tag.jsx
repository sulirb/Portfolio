import PropTypes from "prop-types";

function Tag(props) {
  return (
    <div className="tag">
      <p>{props.tag}</p>
    </div>
  );
}

Tag.propTypes = {
  tag: PropTypes.string.isRequired,
};

export default Tag;
