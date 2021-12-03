import './profileDashboard.css'

import {BsPersonCircle} from 'react-icons/bs';

function ProfieleDashboard(){
    return(
            <div className="profile-dashboard">
                <span className="profile-logo">
                <BsPersonCircle />
                </span>
                <div className="profile-right">
                    <div className="profile-posts profile-right-items">
                        <h3>98</h3>
                        <h5>Posts</h5>
                    </div>
                    <div className="profile-followers profile-right-items">
                    <h3>98</h3>
                        <h5>Followers</h5>
                    </div>
                
                    <div className="profile-following profile-right-items">
                    <h3>98</h3>
                        <h5>Following</h5>
                    </div>
                </div>
            </div>
    )
}
export default ProfieleDashboard;