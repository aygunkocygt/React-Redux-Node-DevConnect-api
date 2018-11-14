import React from 'react';
import {Link} from 'react-router-dom';

const ProfileAction = () => {
        return (
       <div className="btn-group mb-4" role="group">
         <Link to="/edit-profile" className="btn btn-light">
          <i className="fas fa-user-circle text-info mr-1" />
             Profilimi Düzenle
         </Link>
            <Link to="/add-experience" className="btn btn-light">
            <i className="fab fa-black-tie text-info mr-1" />
             Deneyim Ekle
            </Link>
            <Link to="/add-education" className="btn btn-light">
            <i className="fas fa-graduation-cap text-info mr-1" />
              Eğitim Ekle
            </Link>
        </div>
        );
};

export default ProfileAction;