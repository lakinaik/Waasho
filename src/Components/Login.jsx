import React, { useState } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Logo from "../assets/white_blue__logo_2.png";
import { GrMail } from "react-icons/gr";
import { AiFillLock } from "react-icons/ai";
import {AiOutlineEye,AiOutlineEyeInvisible} from 'react-icons/ai'
import { Link } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const handleShow = (e) => {
     e.preventDefault();
    setShowPassword(!showPassword);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!email || !password) {
      alert('Please fill in all fields.');
      return;
    }

    setEmail('');
    setPassword('');
  };

  return (
    <>
      <Navbar />

      <section className="max-w-full flex items-center justify-center bg-[#dbe6ee]">
        <div className="bg-white rounded my-20 login p-4">
          <p className="text-center">
            <img src={Logo} alt="logo" className="p-2 mx-auto" width={100} />
            <span className="text-xl font-semibold">Welcome back!!</span>
          </p>
          <div className="grid md:grid-cols-2">
            <div className="img-box">
              <img src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3N//AABEIAJIAxwMBIgACEQEDEQH/xAAcAAEAAQUBAQAAAAAAAAAAAAAAAwECBAUHBgj/xABGEAACAQMCAgcEBQgJAwUAAAABAgMABBEFIRIxBhMiQVFhgXGRobEHMkJS0RQVFiMzksHwF0NTcoOTlNLhVGLxJCdEorL/xAAZAQEAAwEBAAAAAAAAAAAAAAAAAQIEAwX/xAAsEQEAAgIBAwIFAgcAAAAAAAAAAQIDEQQSIVETMQUUIkFSkfAVIzJTYXGB/9oADAMBAAIRAxEAPwDuNKUoFKUoFKUoFKUoFKUoFKUoFKUoFKUoFKUoFKUoFKUoFKUoFKUoFKUoFRSSMGVEALN4+Hj8qpIWMvArcIxkmiRsJOJnLYGBkez8KAHkVlEnCQxwCvjUo5VA5LzKmMKO1ufrY/kVJJIkUbO5wqjJNBJStfNf9VkuI4VAz+ukw2PHhAOB7axo9ftJbt7OK9sXukGWgSQl1HmoGe+g20riNSxYAKMkmoVuZGAK2s5B7+yPgTmsG5uHmlgjZgqs44goPa3G248623dvQYs148UfEbWYbgDdOZ5faqpa6CFmeFcc+wTj41Q/rrvh+xCMn++Rt7h8xVbr9a6W45Pu4/7RzHry99BSG6meFHazlBZc7FcfOqQz3FwGdFWJMkASbk49hxir7uRhEEjJEkh4F8j4+gyaucx21tsMJGuAo+AoIVuZxO8RhMvCBlosAAnu3P8AOaq11M0ywxwMjEcRaQggD0NSW0Zhh/WEcZ7Ujeff+HsAq2zHGGuCN5sEeS9w+Z9TQUmluIeAnq5OJgvAgwT7Mn2mrlusuEkjeJmPZ48Yb1BqkX666aXmkeY09v2j/D0NU1ME2pwxUhkIYYyDxDxoMlm4VJJwAMk1EHmfcBVHcG5+vhWCLx3tlDtFlkHMPv8ACpPy5879RueRcrnyBI51Izon48gjDLsRV9YcbmR3ePKuBho3G+2alW4jwOIlT90g5qBPSrUdXXKnIq6gUpSgUpSgjkj4jxK3Cw7xVsDM6txdzEAjvx/PwqasdleMjgfss/1SPHnUikpZJgxQlQuxHxzWHd3kUjIUkTsKWCsR9fIC58tyayZE/K5pYnZhEgAZVYgsSM8xvjGPjUU9pZ28LyzNKkcalmY3D7Dv76j37Dw30yaNqmqdE7ey0FBOZbpTcL1iqZQFJBJJAO4G3sxWv6EfROvRrpLpeqNqcjyRwSSSwcAGHwq8ORzHab3CtxD0xtVvQjWbmwXIQO/EQT9o5+Xdmva6fDHFCrowcuAxfJbPftknC77DkBXXLgyYddca2rW9beyt/G7LHJHuYmDFQMlhkEj4VfJewLCXWRW22UEZJ7hjxpGizBmck9pgO0RjB7qiZbd1KzFQQ31js2x2Oa5LJrZDBCA5HEe05zzJ51BaTxPxXBlTMpHD2x9Ucvx9aSi1Vf193hDzDzYBqM6jo8ezXliv+KlWilp9oRuPKeEia5acbqo6uMg5B+8feMehq2aSN7pIndFWPEjBiNz9kfx91YQ1PRYxhdWhRRyVbgYFVj1fQUBA1C0JJyWeUEk+ZNT6V/xlHVXyzbmRLjhto3V+Pd8HOEHPPt2HrUl5P1MOQQGYhVyftH+c+lYB1LRZH4k1K0RsYylwq5HvqaKbTZXDLeRTkfVzOGx8aiaWj3hPVHlk27QRRpGkqEKMfXGTUOoTLJGIYXBldlxgcWACCSceQqRI4WuiQiEqu2F5Ve6QxycfCA7bbDn6VAiDhII1GS0ZUcJGCe6pWcnaaMcDdnxG/jV6CNyXCji5Ekb1BeuxeOHtJG+7Sj7OCMD1oliiWGC7AWVB1bhBlt+Bu70IrZK6OMq6sAcZBzWMumW2P67nna4k5/vVZLbrZI0ts0mQQzo0jMHGw7ycHHyqBkW7B3d1GFJ288czWRUUKleItzY5x4VLQKUpQKUpQKtdVdSrDarqUGutYZRD1sczGRySwk7Qbu9NgOXuNec6fapJDp0diUKSXDdvBBBQeB9uOdekiM0MkyRqJIkfAXOGGQDt3HnXOem96LzXJAOILCgjAbbB5n4mt3w7F6nIjf27uOe3TR59XyXH3Wx/PpXRegF213prWtxxEQHER3AKeR78fDavLdELCyv9aEd/xEFMpHyVyN8H0z7q6h+SRdUiRDqlj3j6rs8Ps/Ct3xTkV16Wu/vtx41J/q2nRVRQoGAKKULNwleLOGxWE9rdm4WVNQcKFIMZjHCT4+PxqO4jliQM4gMYHbkWPLAewk5Hjv6V4bYi/MWk3F3PcSafbPI7dpzGNzj/AMVlLo+mp9XT7Yf4QqWxfjiO6sFYqroMBgPD+e6smrepbyr0wxl0+yHKztx/hL+FVNhZY3tLf/LWsilOq3lOoYUmnafwlnsbbAGf2S/hWG/R7TbgZl0+1XP2REPjW2lTrEZOWRjPhVsUmey44XxuPwqYyXj2lHTHhoG6J2YybQSWDjk9tKw+GcfCt1YWzW8KLJNJO6rwmSQ5JrKYZFYisLRnDl2Ru1xYzju3qbZL3jVpIrEd4VuDLD1ssYQgjOCN9hU/WRsnEWXh5GrZx1kRw2Mbjw28fKsTqFurjrG4kVFGy9knO+55+HxqiyVblY0SMcUkuP2aDLD29w9ao0EtypW4bq4z/Vodz7W/D31KTDapvwRoNgBtk+GPGoLi4naB3gTqwB9eUbn2L+OPWoE9kzNboWJJ3GTzODisio4YhFEkYJIUAZJ3NSUClKUClKUCqE4FVqjcjig1y3DxCe4khJikbiBTtYwAMEeePPnWP+jml3CCS7sopJ3GZJCN2bvJ9amV+MixZGDiT9YcbcI7XPzyBjzrZjlVq3tXvWdImIn3eefotocMiSCAwuG7DJO6kHywaybG8kuYrpbS6SWW2lkiIePfiViACcgd3Os+UA3kI8Fc/L/mvCtrkfRzV7oWlv16XQE8ytLjEjEscHB+9yrvipk5MzETuVLTXHD0F5rFnagQ3+sGK6UDrYljyM43GAM49a1tx0j0aVQk9/czx4I4UgZSwPMEnf8AjvzrxerX8mp38t5Mqq0hHZHcAMAVi162P4Tj6Ym8ztmtybb7OjDp1o8KhIoLrhUYAEYAA99WN9IFh3Wlyf3fxrndVzXaPhXHjyp8zd0H+kGz7rGf95ap/SDaf9BcfvCufUq38L43g+Zu6GPpBsu+yuB6rVD0708sHFtchgPBcHy51z2r4+HrEMmeHiHFjnion4Zx9don9SORkl0VOnmmPsyTR74PEnF8qyYOlehzEmS+wzdnDQuoA9RWDf6bout6akWjmzSWMoxZAFZI89rOPLPPvrUdL9K0exsrWXTZEEztgBZOPjX71edTDxclopq0TP78O03yRG+za2GuMzaraG8S5S2haa1kBGHQDYN442ryL9IdXd+NtQmDEjPCQvyrBtWj6+PruMRFgJOA4PDneunWmiWFlcxfm+xid1QkyydrGeRyc+B5fxrRljDwp+qvVtSvXm9p0yOjTSz6RbXd9GRcupLO/PGeflkY2rMnl/KYXhtV6wsMcecIPXv9M1eLXjwblut7+HGE/d7/AFzV09zDbDDNuBsijJx7K8S07tMw2RGo0kt5TNEjleHiG48DUtQWaNHbxq4w2MkeBO+KnqqSlKUClKUCqHlVax7uVo4+GPHWSHgTPj4+nOghtI+O7urgkFWIVPYAAfiPhWdUcEaxRqi54QMDNXs3CCTyFBjJ2r6Q90aBfU5J+GPfXPejGk2PSJr176aVboMCoRgMLjbu35fKvfxErZyzHnIGkOfZt8AK41FJJC4eGR42HJkYqR6ivU+G4rZIv021PbuzZ7RGtvZXfQCUZNlfIw8Jlx8R+FaK+6MavYqzy2haNRkyRMHGPn8K2Wk9N760Cpexi7jG3FnDj176j1jpnf30bxW6JawMCpxu5B8/wrdj+fpfptqY8uNvR1t5mqca/eHvqvd4eddBsel2h/kyG4s+plx2lWAEZ8QRWzkZr4oia06v9OVKRb3nTnnGn3h76rxr95ffXSx0x0D+zk/09P0x0A/1cn+RWX57N/Zn9/8AHT0afk5pxL4j31UbjIro79LujzDeBmPgbYV4XWb1NQ1Ga5ihWGNiOGNQBgD2VowcjJknVsc1UvStY7Ttdpel6nflvzdBI4+qzqeFfYSSB6VvbLoBfuA1zPDBnmqdo/wFajRukF9o3Etu6vCxyYpBkZ8vCt9ddP7h4AtpYiKYjtM78QHsGPnXDkTzevWKI15Xp6WvqS6r0Q0zS9Iubma6uGlRCVYkAcXcMe2t30Y1DrNKtmk4nmeJQFUbtw9k/Kua32oXeoS9Ze3Ekzd3E2y+wchXQeiEqQ6HpzTOqLibmefb29prDzsOSmCJy23O3bDas3+mHoOC4m+u/Up92M5Y+1u7099R3SRW9jNgKgI3PeT/ABNSdZPN+yj6tT9uQb+i/j7qujto0frG4pJOXE5yR7PD0ryGpOrq4BU5BGQaurGsCDaxkciMjHhmsmgUpSgUpSgskdY0LuwVQMknkKx7cNLKLiRSMjEanuXx8ifw86pqCCXqo5P2byYbw+qcfHHwqSyk44QrbPH2HHgR/OfWgyKxbz9ay2w/rP2n9zv9/L1NX3dwlvCZHycclXcsfAVS1iZVZ3IMkm7Ech4AeQoK3QH5LLnlwH5VzHotoUWsahcx3EjJDANwhAYkkgY9xrp15tazf3DXzV0q6V3WjdNNZtViSS3ivJAiglWUZ7iK28PPGOLVm2t/dxy0m2pdjuvo/jOTaX7L4CVM/LFeO1SxbTb6W0klSV4zgtHv/Jrz+nfSl1aAfnDUIMfZcmQenOt9pFpe6/YfnLS4JLuB3YdbncsOfPc163FzTFv5mWJhmyVj7V023RXo6dcllklkaK2jIBK/WY+Ar0c/QjTUeNUe6ZnJ5yqOW/3TVvRW4l0TTWt7vS9R61pWdjHbFh3Y3HsrZz9IYWkidLS/UoTkSWcq5yP7tYuVyeTOWfTmdf4dsdMcVjqa0dBbPHKf/UD/AGVX9BbPwm/1A/2Vsv0mi2zBKD5wy/7KfpLF/YSf5Mv+ys/r8zzK/Ri8NZ+hOnrJGkxuVWRuEcM4O+Cfu+RrA6RdDY7DT5LywmkcQrxPHKQcjvIIHdW/bX4pJYWe1vOGNi36u1lYnskY+qPGrrzWo7u0mgTTNUcSoyb2bgbjzq+PkcutomZnSJpimOzlnsr2dh0DeeNJbjUIyjAECFMjHkTXnZNB1SGCSaexljjijaR2bAwqjJPOvPf0lw2dqLW21O66leSxKR7j/wA16vLz7iPTyRHlmx0/Ku3QuknRG103SXura4laWMji6xlwy+W3Ot90JiQaLbyMBxKnZJ+yCST86+eNV+kG7uS35NG+f7S5kMjV9G6NbxDTNIDA8ElovEmcKzcIIyO/m1eRyeR1Yoxzbqne9tOOmrdWtNo1zxnhtkMrDvGyj2n8KhvIJHtpGnlLdnZE7K/ifXbyrPTAGBjA7hUF+wFrICdzhR5knasDuyAAAAAAB3Cq0pQKUpQKUpQQ3cRmhZF+tsVPgRuPiBWOMygXNvtIRh422Bx3HwI8azqxHjeOQywLkt9eM7BvMeBoMaWAXVrJczcQfgJj4WI6sY+fjWyj/Zr7BWNHC4sjEwCsVIx4ZzUEcNmEHWaeA/2v/TZ39oFBk37AWsgyMkY518mfSYCOn+v5/wCtf519XBbQKVFmQDscW5H8K8X0j+i/QulmovfXv5da3GwaaBgpmGMDiDKdwBjPeMeFB8v19OfQKP8A28tyR/8AIm//AFWuX6BujIYE6hq7AHkZI9//AKV0nRdKstF0y30/TYVhtYF4Y0Bz6k9586DNxSq0oIpFYsrIQGB7+8VSKQumWABBIOPKpsVE0EbHLLz5jJwfaKI0sV5ZO0gVVI24tyaBJlJIkDZ7mH4VPgeFMVI1PSKNv0f1Yk8TGymAA7uweVfGp2Ar7fYZUjAIPMGuZaj9B/Ra9vJLiKfULRXOept5E4F9nEpIHrUJfNmK+ztFiWTQNOSRcg2sW3nwivC6b9CPRaxvYriWbULxYznqbiReBj3Z4VBPszXTQAq4AAA+FBp3tpo5zGLmQrxKBl5MgMT/AN/dis62slibjkkeV85UszELtjbJNVkti9wJesIAKngwN8Z7/WsoUClKUClKUClKUClKUClKUClKUClKUClKUClKUClKUClKUClKUClKUClKUClKUClKUClKUClKUClKUClKUClKUClKUClKUClKUClKUClKUClKUClKUH//2Q==" alt="img" className="" width={300}/>
            </div>
            <div>
              <form action="" className="my-4">
                <div className="border-2 border-sky-500 p-2 mb-4 rounded">
                  <GrMail className="inline me-2" />
                  <input
                    type="email"
                    name="email"
                    id="email"
                    className="outline-0 w-[90%]"
                    placeholder="Email"
                    required
                  />
                </div>
                <div className="border-2 border-sky-500 p-2 mb-4">
      <AiFillLock className="inline me-2" />
      {showPassword ? (
        <input
          type="text"
          name="password"
          id="password"
          className="outline-0 w-[80%]"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
      ) : (
        <input
          type="password"
          name="password"
          id="password"
          className="outline-0 w-[80%]"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
      )}
      <button
        className="cursor-pointer float-right"
        onClick={handleShow}
      >
        {showPassword ? (
          <AiOutlineEye className="inline" />
          ) : (
          <AiOutlineEyeInvisible className="inline" />
        )}
      </button>
    </div>
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    name="remember"
                    id="remember"
                    className="me-2 "
                  />
                  <label htmlFor="remember">Remember me</label>
                </div>
                <div className="text-center my-4">
                  <button onSubmit={handleSubmit} className="bg-sky-500 text-white py-1 px-4 border-2 border-sky-500 rounded-lg duration-300 hover:bg-transparent hover:text-black">
                    Login
                  </button>
                </div>
                <div className="text-center font-medium">
                  <span>
                    Create a new account?
                    <Link to={"/register"} className="text-sky-700">
                      Create
                    </Link>
                  </span>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Login;
