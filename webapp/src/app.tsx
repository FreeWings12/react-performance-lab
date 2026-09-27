import { useState, type FunctionComponent } from 'react';
export const App = () => {
    const [CustomerDetailsComponent, setCustomerDetails] = useState<null | FunctionComponent>(null);
    const handleCustomerDetails = async () => {
        console.log("handleCustomerDetails clicked");
        const { CustomerDetails } = await import('./CustomerDetails');
        setCustomerDetails(CustomerDetails);
    }
    return (
        <div>
            <h1>Hello React Performance Lab!</h1>
            {CustomerDetailsComponent !== null && <CustomerDetailsComponent />}
            <button onClick={handleCustomerDetails}>View Customer Details</button>
        </div>
    );
}