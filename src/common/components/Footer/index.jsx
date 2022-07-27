import React from 'react';
import Icons from '../Icons';
import './Style.scss';

const Footer = () => {
    return (
        <footer className="footer" data-testid="footer">
            <div className="container">
                © 2022 React Assignment.{' '}
                <span className="ui-text-muted">
                    Crafted with <Icons name="heart" /> by Mustafa Cakir
                </span>
            </div>
        </footer>
    );
};

export default Footer;
