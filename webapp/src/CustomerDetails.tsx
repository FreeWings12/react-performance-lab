export type customerDetailsProps = {
    customerId: string,
};

const CustomerDetails = ({ customerId }: customerDetailsProps) => {
    return <h3>Hello Customer Details {customerId}</h3>;
}

export default CustomerDetails;
