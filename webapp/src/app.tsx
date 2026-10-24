import { lazy, Suspense, useState, type FunctionComponent } from 'react';
import { CustomerDetailsErrorBoundary } from './CustomerDetailsErrorBoundary';

const CustomerDetails = lazy(() => import('./CustomerDetails'));

// import { customerDetailsProps } from './CustomerDetails';
export const App = () => {
    const [showCustomerDetails, setCustomerDetails] = useState(false);
    const handleCustomerDetails = async () => {
        console.log("handleCustomerDetails clicked");
        setCustomerDetails(true);
    }
    return (
        <CustomerDetailsErrorBoundary>
            <div>
                <h1>Hello React Performance Lab!</h1>
                {showCustomerDetails && (
                    <Suspense fallback={<p>Loading Customer Details...</p>}>
                        <CustomerDetails customerId='123' />
                    </Suspense>
                )}
                <button onClick={handleCustomerDetails}>View Customer Details</button>
            </div>
        </CustomerDetailsErrorBoundary>
    );
}