export default function GetInTouch(){
    return(
        <>
            <form className="dlab-form dzForm">
                <div className="dzFormMsg"></div>
                <input type="hidden" className="form-control" name="dzToDo" value="Contact" />
                <input type="hidden" className="form-control" name="reCaptchaEnable" value="0" />
                <div className="row">
                    <div className="col-sm-6">
                        <div className="input-group">
                            <div className="input-group-prepend">
                                <span className="input-group-text"><i className="la la-user"/></span>
                            </div>
                            <input name="dzFirstName" type="text" required className="form-control" placeholder="First Name"/>
                        </div>
                    </div>
                    <div className="col-sm-6">
                        <div className="input-group">
                            <div className="input-group-prepend">
                                <span className="input-group-text"><i className="la la-user"/></span>
                            </div>
                            <input name="dzLastName" type="text" className="form-control" required placeholder="Last Name"/>
                        </div>
                    </div>
                    <div className="col-sm-6">
                        <div className="input-group">
                            <div className="input-group-prepend">
                                <span className="input-group-text"><i className="la la-envelope"/></span>
                            </div>
                            <input name="dzEmail" type="text" required className="form-control" placeholder="Email Address"/>
                        </div>
                    </div>
                    <div className="col-sm-6">
                        <div className="input-group">
                            <div className="input-group-prepend">
                                <span className="input-group-text"><i className="la la-phone"/></span>
                            </div>
                            <input name="dzPhoneNumber" type="text" required className="form-control" placeholder="Phone No."/>
                        </div>
                    </div>
                    <div className="col-sm-6">
                        <div className="input-group">
                            <div className="input-group-prepend">
                                <span className="input-group-text"><i className="la la-file-alt"></i></span>
                            </div>
                            <input name="dzOther[project_title]" type="text" className="form-control" required placeholder="Project Title"/>
                        </div>
                    </div>
                    <div className="col-sm-6">
                        <div className="input-group">
                            <div className="input-group-prepend">
                                <span className="input-group-text"><i className="la la-list"/></span>
                            </div>
                            <select name="dzOther[choose_service]" className="form-control">
                                <option>Choose Service</option>
                                <option>Web Development</option>
                                <option>Web Design</option>
                                <option>Strategy & Research</option>
                            </select>
                        </div>
                    </div>
                    <div className="col-sm-12 m-b20">
                        <div className="input-group">
                            <div className="input-group-prepend">
                                <span className="input-group-text"><i className="la la-sms"/></span>
                            </div>
                            <textarea name="dzMessage" required className="form-control" placeholder="Message"></textarea>
                        </div>
                    </div>
                    <div className="col-sm-12">
                        <button name="submit" type="submit" value="Submit" className="btn btn-primary">Submit Now<i className="fa fa-angle-right m-l10"></i></button>
                    </div>
                </div>
            </form>
        </>
    )
}