import "./support.css";

import React from "react";

export const Support: React.FC = () => {
    return (
        <div className="support-page">
            <section className="support-hero">
                <h1 className="support-title">Support</h1>
                <p className="support-subtitle">We're here to help you with all your iBuyPower products and services</p>
            </section>

            <section className="support-faq">
                <h2 className="support-heading">Frequently Asked Questions</h2>
                <div className="support-faq-list">
                    <div className="support-faq-item">
                        <h3 className="support-question">How do I track my order?</h3>
                        <p className="support-answer">
                            Once your order is shipped, you will receive an email with tracking information. You can also track your order by logging into your iBuyPower account.
                        </p>
                    </div>

                    <div className="support-faq-item">
                        <h3 className="support-question">What is the return policy?</h3>
                        <p className="support-answer">
                            We accept returns within 30 days of purchase for unopened items. For detailed information, please visit our <a href="/returns" className="support-link">Return Policy</a> page.
                        </p>
                    </div>

                    <div className="support-faq-item">
                        <h3 className="support-question">How can I contact customer support?</h3>
                        <p className="support-answer">
                            You can contact us via email at <a href="mailto:support@ibuypower.com" className="support-link">support@ibuypower.com</a> or call us at 1-800-555-POWER (7693).
                        </p>
                    </div>
                </div>
            </section>

            <section className="support-contact">
                <h2 className="support-heading">Contact Us</h2>
                <p className="support-text">
                    For any questions or issues, our support team is available 24/7 to assist you. You can reach out via the following methods:
                </p>
                <ul className="support-contact-list">
                    <li className="support-contact-item"><strong>Email:</strong> <a href="mailto:support@ibuypower.com" className="support-link">support@ibuypower.com</a></li>
                    <li className="support-contact-item"><strong>Phone:</strong> 1-800-555-POWER (7693)</li>
                    <li className="support-contact-item"><strong>Live Chat:</strong> Available on our website during business hours</li>
                </ul>
            </section>

            <section className="support-warranty">
                <h2 className="support-heading">Warranty Information</h2>
                <p className="support-text">
                    All iBuyPower products come with a standard 1-year warranty. For extended warranty options or to check the status of your current warranty, please check our <a href="/warranty" className="support-link">Warranty</a>.
                </p>
            </section>
        </div>
    )
}