import React, { Component } from 'react';

const styles = {
    dataCard: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        border: 'none',
        width: 80,
        height: 80,
        flexWrap: 'wrap',
        marginRight: 15,
        padding: 10,
        boxShadow: '0 12px 15px rgba(0,0,0,0.1), 0 17px 50px rgba(0,0,0,0.1)',
        borderRadius: '.375rem',
        backgroundColor: '#fc7967',
        color: '#fff'
    }
};

class DataCard extends Component {
    render() {
        return (
            <div style={styles.dataCard}>
                {this.props.month} <br />$
                {this.props.dataValue.toLocaleString(2)}
            </div>
        );
    }
}

export default DataCard;
