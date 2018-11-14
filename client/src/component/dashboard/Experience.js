import React, { Component } from 'react';
import { connect } from 'react-redux';
import propTypes from 'prop-types';
import Moment from 'react-moment';
import { deleteExperience } from '../../actions/profileActions';

class Experience extends Component {
    onDeleteClick(id) {
        this.props.deleteExperience(id);
    }

    render() {
        const experience = this.props.experience.map(exp => (
            <tr key={exp._id}>
                <td>{exp.company}</td>
                <td>{exp.title}</td>
                <td>
                    <Moment format="YYYY/MM/DD">{exp.from}</Moment> -
                    {exp.to === null ? (
                        ' Now'
                    ) : (
                        <Moment format="YYYY/MM/DD">{exp.to}</Moment>
                    )}
                </td>
                <td>
                    <button
                        onClick={this.onDeleteClick.bind(this, exp._id)}
                        className="btn btn-danger"
                    >
                       Deneyimi Sil
                    </button>
                </td>
            </tr>
        ));
        return (
            <div>
                <h4 className="mb-4">Çalışma Deneyimleri</h4>
                <table className="table">
                    <thead>
                    <tr>
                        <th>Şirket</th>
                        <th>Posizyon</th>
                        <th>Çalışma Süresi</th>
                        <th />
                    </tr>
                    {experience}
                    </thead>
                </table>
            </div>
        );
    }
}

Experience.propTypes = {
    deleteExperience: propTypes.func.isRequired
};

export default connect(null, { deleteExperience })(Experience);
