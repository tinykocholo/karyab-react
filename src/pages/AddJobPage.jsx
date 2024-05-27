import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const AddJob = ({ addJobSubmit }) => {
  const [type, setType] = useState("تمام وقت");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [salary, setSalary] = useState("زیر ۵ میلیون تومان");
  const [location, setLocation] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [companyDescription, setCompanyDescription] = useState("");
  const [companyContactEmail, setCompanyContactEmail] = useState("");
  const [companyContactPhone, setCompanyContactPhone] = useState("");

  const navigate = useNavigate();

  const submitForm = (e) => {
    e.preventDefault();

    const newJob = {
      title,
      type,
      description,
      location,
      salary,
      company: {
        name: companyName,
        description: companyDescription,
        contactEmail: companyContactEmail,
        contactPhone: companyContactPhone,
      },
    };
    addJobSubmit(newJob);
    navigate("/jobs");
    toast.success("آگهی با موفقیت درج شد.");
  };

  return (
    <section className="bg-green-50">
      <div className="container m-auto max-w-2xl py-24">
        <div className="bg-white px-6 py-8 mb-4 shadow-md rounded-md border m-4 md:m-0">
          <form onSubmit={submitForm}>
            <h2 className="text-3xl text-center font-semibold mb-6">
              اضافه کردن آگهی
            </h2>

            <div className="mb-4">
              <label
                htmlFor="type"
                className="block text-gray-700 font-bold mb-2"
              >
                نوع همکاری
              </label>
              <select
                id="type"
                name="type"
                className="border rounded w-full py-2 px-3"
                required
                value={type}
                onChange={(e) => setType(e.target.value)}
              >
                <option value="تمام وقت">تمام وقت</option>
                <option value="پاره وقت">پاره وقت</option>
                <option value="دور کاری">دور کاری</option>
                <option value="کارآموزی">کارآموزی</option>
              </select>
            </div>

            <div className="mb-4">
              <label className="block text-gray-700 font-bold mb-2">
                عنوان شغلی
              </label>
              <input
                type="text"
                id="title"
                name="title"
                className="border rounded w-full py-2 px-3 mb-2"
                placeholder="مثال: توسعه‌دهنده وب"
                required
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="description"
                className="block text-gray-700 font-bold mb-2"
              >
                توضیحات
              </label>
              <textarea
                id="description"
                name="description"
                className="border rounded w-full py-2 px-3"
                rows="4"
                placeholder="وظایف شغلی و نیازمندی های مورد نظر را بنویسید"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              ></textarea>
            </div>

            <div className="mb-4">
              <label
                htmlFor="type"
                className="block text-gray-700 font-bold mb-2"
              >
                حقوق
              </label>
              <select
                id="salary"
                name="salary"
                className="border rounded w-full py-2 px-3"
                required
                value={salary}
                onChange={(e) => setSalary(e.target.value)}
              >
                <option value="زیر ۵ میلیون تومان">زیر ۵ میلیون تومان</option>
                <option value="۵ تا ۹ میلیون تومان">۵ تا ۹ میلیون تومان</option>
                <option value="۱۰ تا ۱۴ میلیون تومان">
                  ۱۰ تا ۱۴ میلیون تومان
                </option>
                <option value="۱۵ تا ۱۹ میلیون تومان">
                  ۱۵ تا ۱۹ میلیون تومان
                </option>
                <option value="۲۰ تا ۲۴ میلیون تومان">
                  ۲۰ تا ۲۴ میلیون تومان
                </option>
                <option value="۲۵ تا ۲۹ میلیون تومان">
                  ۲۵ تا ۲۹ میلیون تومان
                </option>
                <option value="۳۰ تا ۳۴ میلیون تومان">
                  ۳۰ تا ۳۴ میلیون تومان
                </option>
                <option value="۳۵ تا ۳۹ میلیون تومان">
                  ۳۵ تا ۳۹ میلیون تومان
                </option>
                <option value="۴۰ تا ۴۴ میلیون تومان">
                  ۴۰ تا ۴۴ میلیون تومان
                </option>
                <option value="۴۵ تا ۴۹ میلیون تومان">
                  ۴۵ تا ۴۹ میلیون تومان
                </option>
                <option value="بیشتر از ۵۰ میلیون تومان">
                  بیشتر از ۵۰ میلیون تومان
                </option>
              </select>
            </div>

            <div className="mb-4">
              <label className="block text-gray-700 font-bold mb-2">آدرس</label>
              <input
                type="text"
                id="location"
                name="location"
                className="border rounded w-full py-2 px-3 mb-2"
                placeholder="مثال: تهران، سعادت‌آباد"
                required
                value={location}
                onChange={(e) => setLocation(e.target.value)}
              />
            </div>

            <h3 className="text-2xl mb-5">مشخصات شرکت</h3>

            <div className="mb-4">
              <label
                htmlFor="company"
                className="block text-gray-700 font-bold mb-2"
              >
                نام شرکت
              </label>
              <input
                type="text"
                id="company"
                name="company"
                className="border rounded w-full py-2 px-3"
                placeholder="مثال: لیارا"
                value={companyName}
                onChange={(e) => setCompanyName(e.target.value)}
              />
            </div>

            <div className="mb-4">
              <label
                htmlFor="company_description"
                className="block text-gray-700 font-bold mb-2"
              >
                توضیحات شرکت
              </label>
              <textarea
                id="company_description"
                name="company_description"
                className="border rounded w-full py-2 px-3"
                rows="4"
                placeholder="فعالیت شرکت خود را توضیح دهید"
                value={companyDescription}
                onChange={(e) => setCompanyDescription(e.target.value)}
              ></textarea>
            </div>

            <div className="mb-4">
              <label
                htmlFor="contact_email"
                className="block text-gray-700 font-bold mb-2"
              >
                ایمیل شرکت
              </label>
              <input
                type="email"
                id="contact_email"
                name="contact_email"
                className="border rounded w-full py-2 px-3"
                placeholder="آدرس ایمیل شرکت برای ارسال درخواست همکاری"
                required
                value={companyContactEmail}
                onChange={(e) => setCompanyContactEmail(e.target.value)}
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="contact_phone"
                className="block text-gray-700 font-bold mb-2"
              >
                آدرس تلفن
              </label>
              <input
                type="tel"
                id="contact_phone"
                name="contact_phone"
                className="border rounded w-full py-2 px-3"
                value={companyContactPhone}
                onChange={(e) => setCompanyContactPhone(e.target.value)}
              />
            </div>

            <div className="flex flex-row gap-5">
              <button
                className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded-full w-full focus:outline-none focus:shadow-outline"
                onClick={() => navigate("/jobs")}
                type="button"
              >
                لغو
              </button>
              <button
                className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded-full w-full focus:outline-none focus:shadow-outline"
                type="submit"
              >
                درج آگهی
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};
export default AddJob;