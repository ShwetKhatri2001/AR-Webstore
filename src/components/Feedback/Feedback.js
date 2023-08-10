import "./Feedback.css"
const Feedback= ()=>{
    return (
        <div className="container">
            <h1>
                What do you say ?
            </h1>
            <div>
                <form>
                    <div className="form-field">
                        <label>What did you like the most about AR-Webstore ?</label>
                        <textarea type="text" placeholder="I would like to say ..."></textarea>                        
                    </div>
                    <div className="form-field">
                        <label>Will our 3D and AR features improve your shopping experience if we integrate it on an online e-commerce store ?</label>
                        <textarea type="text" placeholder="I would like to say ..."></textarea>                        
                    </div>
                    <div className="form-field">
                        <label>What are the other features that excites you to have them on AR-Webstore ?</label>
                        <textarea type="text" placeholder="I would like to say ..."></textarea>                        
                    </div>
                    <div className="form-field">
                        <label>Any other comments?</label>
                        <textarea type="text" placeholder="I would like to say ..."></textarea>                        
                    </div>

                </form>
            </div>
        </div>
    )
}

export default Feedback;