import './Swipelist.css'; // Adjust the path according to your file structure


function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
<div
      className={`${className} custom-prev-arrow`}
       // Add 'custom-prev-arrow' class
      style={{ ...style, display: "block" }}
      onClick={onClick}
    />
  );
}

export default SamplePrevArrow