import React, {Component} from 'react';
import Moment from 'react-moment';


class ProfileCreds extends Component {
    render() {
        const { experience, education } = this.props;

        const expItems = experience.map(exp => (
           <li key={exp._id} className="list-group-item">
               <h4>{exp.company}</h4>
               <p>
                   <Moment format="YYYY/MM/DD">{exp.from}</Moment> -
                   {exp.to === null ? (' Now') : (<Moment format="YYYY/MM/DD">{exp.to}</Moment>)}
                </p>
               <p><strong>Posizyon: </strong>{exp.title}</p>
               <p>
                   {exp.location === '' ? null : (<span><strong>Şehir: </strong> {exp.location}</span>)}
               </p>
               <p>
                   {exp.description === '' ? null : (<span><strong>Açıklama: </strong> {exp.description}</span>)}
               </p>
            </li>
        ));
        const eduItems = education.map(edu => (
            <li key={edu._id} className="list-group-item">
                <h4>{edu.school}</h4>
                <p>
                    <Moment format="YYYY/MM/DD">{edu.from}</Moment> -
                    {edu.to === null ? (' Now') : (<Moment format="YYYY/MM/DD">{edu.to}</Moment>)}
                </p>
                <p><strong>Derece: </strong>{edu.degree}</p>
                <p>
                    <strong>Bölüm: </strong>{edu.fieldofstudy}
                </p>
                <p>
                    {edu.description === '' ? null : (<span><strong>Açıklama: </strong> {edu.description}</span>)}
                </p>
            </li>
        ));
        return (
            <div className="row">
                <div className="col-md-6">
                    <h3 className="text-center text-info">Deneyim</h3>
                    {expItems.length > 0 ? (
                        <ul className="list-group">{expItems}</ul>
                    ) : (
                        <p className="text-center">Henüz deneyime sahip değil</p>
                    )}
                </div>
                <div className="col-md-6">
                    <h3 className="text-center text-info">Eğitim</h3>
                    {eduItems.length > 0 ? (
                        <ul className="list-group">{eduItems}</ul>
                    ) : (
                        <p className="text-center">Henüz eğitme sahip değil</p>
                    )}
                </div>
            </div>
        );
    }
}

export default ProfileCreds;