
const Project = (props)=>{


    return(

        <div className="Project">
            <div className="Project-inner">
                <div className="Project-img">
                    <img />
                </div>
                <div className="Project-title">
                    {props.name}
                </div>
            </div>
        </div>
    )
}
export default Project