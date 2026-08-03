import Link from "next/link";
import Logo from "../../Logo";


export default function Footer() {
  return (
    <footer className="bg-black py-10 text-white">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-3 border-b border-neutral-600 py-4">
          <div>
            <div>
              <div>
                <Logo></Logo>
              </div>
              <p>
                Our job is to filling your tummy with delicious food and with
                fast and free delivery.
              </p>
              <div>icons</div>
            </div>
          </div>
          <div className="flex flex-col items-center">
            <h1 className="text-primary">Quick Links</h1>
            <ul>
              <li>Home</li>
              <li>About us</li>
              <li>Service</li>
              <li>Pricing</li>
              <li>Contact us</li>
              <li>Policies</li>
            </ul>
          </div>
          <div className="flex flex-col items-end">
            <div>
              <h1 className="text-primary">Get in Touch</h1>
              <div>
                <p>Oxygen, Chattogram</p>
              </div>
              <div>
                <p>+880-1974-87445</p>
              </div>
              <div>
                <p>arijsayeed@gmail.com</p>
              </div>
              <div>24/7</div>
            </div>
          </div>
        </div>
        <div className="flex justify-between my-2 text-xs text-neutral-600">
          <div>
            <p>© 2025 Its My Kitchen. All rights reserved.</p>
          </div>
          <div className="flex gap-4">
            <p>Privacy Policy</p>
            <p>Terms of Service</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
