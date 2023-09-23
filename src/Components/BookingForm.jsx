import React, { useState } from "react";
import { useAuth } from "./context/auth";

const BookingForm = ({ vehicle, plans }) => {
  const vehicleTypes = vehicle.title;
  const [auth] = useAuth();
  const names = auth?.user?.fullname
  const [name, setName] = useState(names);
  const [address, setAdddress] = useState("");
  const [city, setCity] = useState("");
  const [vehicleType, setVehicleType] = useState(vehicleTypes);
  const [vehicleManufacturer, setVehicleManufacturer] = useState("");
  const [vehicleModel, setVehicleModel] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
const email = auth?.user?.email
console.log(email)

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch(`${process.env.REACT_APP_API}/booking`, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          vehicle,
          plans,
          name,
          address,
          city,
          vehicleType,
          vehicleManufacturer,
          vehicleModel,
          date,
          time,
        }),
      });
      if (res.status === 200) {
        window.location.href = "/";
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <form method="POST" onSubmit={handleSubmit}>
        <div className="grid md:grid-cols-2 grid-cols-1 gap-4 bg-slate-50 p-4">
          <div>
            <label
              htmlFor="name"
              className="text-lg font-semibold text-slate-800"
            >
              Name
            </label>
            <br />
            <input
              className="py-2 ps-6 border-2 outline-0 text-lg text-slate-700 w-full rounded-full focus:outline-2 focus:outline-blue-700"
              type="text"
              name="name"
              id="name"
              placeholder="Enter your name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div>
            <label
              htmlFor="address"
              className="text-lg font-semibold text-slate-800"
            >
              Address
            </label>
            <br />
            <input
              className="py-2 ps-6 border-2 outline-0 text-lg text-slate-700 w-full rounded-full focus:outline-2 focus:outline-blue-700"
              type="text"
              name="address"
              id="address"
              placeholder="Enter your address"
              value={address}
              onChange={(e) => setAdddress(e.target.value)}
              required
            />
          </div>
          <div>
            <label
              htmlFor="name"
              className="text-lg font-semibold text-slate-800"
            >
              Select City
            </label>
            <br />
            <select
              name="city"
              id="city"
              value={city}
              onChange={(e) => setCity(e.target.value)}
              className="py-2 ps-6 border-2 outline-0 text-lg text-slate-700 w-full rounded-full focus:outline-2 focus:outline-blue-700"
              required
            >
              <option value="">Choose City</option>
              <option value="Bhubaneswar">Bhubaneswar</option>
              <option value="Cuttack">Cuttack</option>
              <option value="Patna">Patna</option>
              <option value="Delhi">Delhi</option>
              <option value="Bengaluru">Bengaluru</option>
              <option value="Pune">Pune</option>
            </select>
          </div>
          <div>
            <label
              htmlFor="vehicleType"
              className="text-lg font-semibold text-slate-800"
            >
              Vehicle Type
            </label>
            <br />
            <input
              type="text"
              name="vehicleType"
              id="vehicleType"
              value={vehicleType}
              onChange={(e) => setVehicleType(e.target.value)}
              placeholder=""
              readOnly
              required
              className="py-2 px-6 border-2 outline-0 text-lg text-slate-700 w-full rounded-full focus:outline-2 focus:outline-blue-700"
            />
          </div>
          <div>
            <label
              htmlFor="vehicleManufacturer"
              className="text-lg font-semibold text-slate-800"
            >
              Vehicle Manufacturers
            </label>
            <br />
            <input
              className="py-2 ps-6 border-2 outline-0 text-lg text-slate-700 w-full rounded-full focus:outline-2 focus:outline-blue-700"
              type="text"
              name="vehicleManufacturer"
              id="vehicleManufacturer"
              value={vehicleManufacturer}
              onChange={(e) => setVehicleManufacturer(e.target.value)}
              required
            />
          </div>
          <div>
            <label
              htmlFor="vehicleModel"
              className="text-lg font-semibold text-slate-800"
            >
              Vehicle Model
            </label>
            <br />
            <input
              className="py-2 ps-6 border-2 outline-0 text-lg text-slate-700 w-full rounded-full focus:outline-2 focus:outline-blue-700"
              type="text"
              name="vehicleModel"
              id="vehicleModel"
              value={vehicleModel}
              onChange={(e) => setVehicleModel(e.target.value)}
              required
            />
          </div>
          <div>
            <label
              htmlFor="date"
              className="text-lg font-semibold text-slate-800"
            >
              Select Date
            </label>
            <br />
            <input
              type="date"
              name="date"
              id="date"
              min={new Date().toISOString().split("T")[0]}
              value={date}
              onChange={(e) => setDate(e.target.value)}
              required
              className="py-2 px-6 border-2 outline-0 text-lg text-slate-700 w-full rounded-full focus:outline-2 focus:outline-blue-700"
            />
          </div>
          <div>
            <label
              htmlFor="time"
              className="text-lg font-semibold text-slate-800"
            >
              Select Time
            </label>
            <br />
            <input
              type="time"
              name="time"
              id="time"
              value={time}
              onChange={(e) => setTime(e.target.value)}
              required
              className="py-2 px-6 border-2 outline-0 text-lg text-slate-700 w-full rounded-full focus:outline-2 focus:outline-blue-700"
            />
          </div>
        </div>
        <div className="flex justify-end">
          <button
            type="submit"
            className={`bg-blue-700 text-white text-lg font-semibold px-4 py-2 rounded-3xl duration-500 hover:bg-blue-900 hover:text-white`}
          >
            Confirm Booking
          </button>
        </div>
      </form>
    </>
  );
};

export default BookingForm;
