const Section = (props) => {
  return (
    <div className="programme">
        
      <div className="time">
        <p>{props.time}</p>
      </div>
      <div>
        <img src={props.image} alt="" />
      </div>
      <div className="description">
        <div>
          <p className="title">{props.title}</p>
          <p className="type">{props.type}</p>
        </div>
        <p className="duration"> {props.duration} </p> <p> {props.model} </p>
      </div>
    </div>
  );
};

export default Section;
