import {connect} from 'react-redux';
import assign from 'lodash/assign';
import get from 'lodash/get';
import map from 'lodash/map';
import {uploadUserInfo} from '@actions';


const fields = [
    {
        
        path: 'name',
        label: 'Nombre',
        type: 'text',
        placeholder: 'Ingrese su nombre, porfavor'
    },
    {
        
        path: 'lastname',
        label: 'apellido',
        type: 'text',
        placeholder: 'Ingrese su apellido'
    },
    {
        path: 'mail',
        label: 'Mail',
        type: 'text',
        placeholder: 'Ingrese su E-mail'
    },
   
];

const mapFromStateToProps = state => {
    const userValues = state.usersData;
    
    return {
        fields: map(fields, field => {
            const value = get(userValues, field.path);
            return {
                ...field,
                value
            };
        }),
        
    }
}

const mapDispatchToProps = dispatch => ({
    updateValue: field => dispatch(uploadUserInfo())
})

const mergeProps = (stateProps, dispatchProps, ownProps) => {

    const mergeFields = map(stateProps.fields, field => {
        const onChange = ({target: {value}}) => dispatchProps.updateValue(
            assign(stateProps.userValues, {
                [field.control]: value
            })
        )
        return {
            ...field,
            onChange
        };
    })

    return {
        ...ownProps,
        fields: mergeFields
    }

};

export default connect(
    mapFromStateToProps,
    mapDispatchToProps,
    mergeProps
)(Component);