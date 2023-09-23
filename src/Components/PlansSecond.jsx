import React, { useState } from "react";
import PlanCard from "./PlanCard";
import BookingForm from "../Components/BookingForm";

const Plans = ({ vehicle }) => {
    const [selectedPlan, setSelectedPlan] = useState(null);

    // Function to handle vehicle selection
    const handleSecondPlanSelection = (plan) => {
        setSelectedPlan(plan);
    };
    return (
        <>
            <section className="plans-wrapper max-w-[1100px] mx-auto p-2">
                <div className="grid md:grid-cols-3 grid-cols-1 gap-8 place-items-center">
                    {
                        !selectedPlan &&
                        <>
                            <PlanCard
                                borderColor={"slate"}
                                name={"Silver"}
                                price={"399"}
                                duration={"One Time Service"}
                                details={[
                                    "1 day Exterior Cleaning Service",
                                    "1 day Interior Cleaning Service",
                                    "1 day Interior Restore Polish Service",
                                    "1 day Tires Cleaning Serviceg",
                                ]}
                                onSelect={handleSecondPlanSelection}
                            />
                            <PlanCard
                                borderColor={"yellow"}
                                name={"Gold"}
                                price={"899"}
                                duration={"Monthly Alternate Service"}
                                details={[
                                    "12 day Exterior Cleaning Service",
                                    "2 day Interior Cleaning Service",
                                    "2 day Interior Restore Polish Service",
                                    "12 day Tires Cleaning Serviceg",
                                ]}
                                onSelect={handleSecondPlanSelection}
                            />
                            <PlanCard
                                borderColor={"cyan"}
                                name={"Diamond"}
                                price={"1999"}
                                duration={"Monthly Service"}
                                details={[
                                    "24 day Exterior Cleaning Service",
                                    "4 day Interior Cleaning Service",
                                    "4 day Interior Restore Polish Service",
                                    "24 day Tires Cleaning Service",
                                ]}
                                onSelect={handleSecondPlanSelection}
                            /></>
                    }
                </div>
            </section>
            {selectedPlan && <BookingForm vehicle={vehicle} plans={selectedPlan} />}
        </>
    );
};

export default Plans;
