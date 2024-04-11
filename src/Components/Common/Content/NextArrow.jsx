import './Swipelist.css'; // Adjust the path according to your file structure


function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return ( 
      <div
      className={`${className} custom-next-arrow`}
      onClick={onClick}
    >Next</div>


    );
  }
  export default SampleNextArrow