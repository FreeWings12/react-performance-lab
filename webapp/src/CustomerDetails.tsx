export type customerDetailsProps = {
    customerId: string,
};

const CustomerDetails = ({ customerId }: customerDetailsProps) => {
    // This was to test Error Boundary    
    // throw new Error('Test customer details failure');
    return <h3>Hello Customer Details {customerId}</h3>;
}

export default CustomerDetails;
