import React from 'react';
import DisplayError from './components/error/DisplayError';


class ErrorBoundary extends React.Component {
    constructor(props) {
        super(props);
        this.state = { error: null, erroInfo: null }
    }

    componentDidCatch(error, errorInfo) {
        this.setState({
            error: error,
            errorInfo: errorInfo
        })
    }

    render() {
        if (this.state.errorInfo) {
            <DisplayError error={this.state.error} errorInfo={this.state.erroInfo} />
        }
        return this.props.children;
    }
} 

export default ErrorBoundary;