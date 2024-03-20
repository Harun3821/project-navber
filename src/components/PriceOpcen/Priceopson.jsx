import Price from "../Prices/Price";


const Priceopson = () => {

    
        const Priceopson = [
          {
            "id": "1",
            "name": "Basic Membership",
            "price": "$29.99/month",
            "features": [
              "Unlimited access to gym facilities during standard operating hours",
              "Basic gym equipment including cardio machines, free weights, and resistance machines",
              "Locker room access",
              "Access to select group fitness classes",
              "Discounted rates on personal training sessions",
              "Monthly fitness assessment",
              "Access to online workout tracking platform",
              "Discount on gym apparel"
            ]
          },
          {
            "id": "2",
            "name": "Premium Membership",
            "price": "$49.99/month",
            "features": [
              "All features of Basic Membership",
              "Extended gym access including early morning and late-night hours",
              "Access to premium gym equipment and amenities",
              "Additional group fitness classes including specialty classes like yoga and pilates",
              "One complimentary personal training session per month",
              "Nutritional counseling session",
              "Discount on gym merchandise",
              "Access to swimming pool facilities",
              "Free smoothie per visit"
            ]
          },
          {
            "id": "3",
            "name": "VIP Membership",
            "price": "$79.99/month",
            "features": [
              "All features of Premium Membership",
              "Unlimited access to all group fitness classes",
              "Priority booking for group fitness classes and personal training sessions",
              "Complimentary access to exclusive member events and workshops",
              "Discounts on gym merchandise and additional personal training sessions",
              "Bi-annual fitness evaluation with personalized fitness plan",
              "Access to sauna and steam room facilities",
              "VIP parking privileges",
              "Complimentary massage session once a month"
            ]
          }
       ]
      
      


    return (
        <div className="m-12">
           <h2 className="text-center font-bold">BEST PRICE IN THE TWON</h2>

          <div className="lg:grid grid-cols-3 lg:gap-5 space-y-3">
          {
             Priceopson.map(opction => <Price  key={opction.id} opction={opction}></Price>)
           }
          </div>
        </div>
    );
};

export default Priceopson;