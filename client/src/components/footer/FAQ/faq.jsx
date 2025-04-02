import { usePageTitle } from '../../../hooks/usePageTitle';
import './faq.css';

export default function FAQ() {
    usePageTitle('FAQ');

    return (
        <div className="faq-container">
            <h2 className="faq-title">Frequently Asked Questions</h2>

            <div className="faq-item">
                <h3 className="faq-question">Can I use frozen prawns?</h3>
                <p className="faq-answer">
                    Yes, you can use frozen prawns. Make sure to thaw and drain them thoroughly before cooking.
                </p>
            </div>

            <div className="faq-item">
                <h3 className="faq-question">What’s the difference between Creole and Cajun cooking?</h3>
                <p className="faq-answer">
                    Creole cuisine typically uses tomatoes and is more “city” food, while Cajun cuisine is more rustic and doesn’t include tomatoes.
                </p>
            </div>

            <div className="faq-item">
                <h3 className="faq-question">Can I make this ahead of time?</h3>
                <p className="faq-answer">
                    Yes, you can prepare the sauce ahead of time and store it in the fridge for up to 2 days. Add prawns and heat before serving.
                </p>
            </div>

            <div className="faq-item">
                <h3 className="faq-question">What can I serve with prawn creole?</h3>
                <p className="faq-answer">
                    Rice is the traditional accompaniment, but you can also serve it with crusty bread or mashed potatoes.
                </p>
            </div>

            <div className="faq-item">
                <h3 className="faq-question">How do I store leftovers?</h3>
                <p className="faq-answer">
                    Store in an airtight container in the fridge for up to 2 days. Reheat on the stovetop over medium heat.
                </p>
            </div>
        </div>
    );
}