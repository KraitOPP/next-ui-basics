
export default function Footer() {
    return (
        <footer className="bg-black text-gray-400 py-12">
            <div className="max-w-6xl mx-auto grid grid-cols-1  sm:grid-cols-2 lg:grid-cols-4 gap-8 px-4 sm:px-6 lg:px-8">
                <div>
                    <h2 className="font-bold text-center text-lg text-white mb-4">About Us</h2>
                    <p >Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum placeat, ipsum corporis incidunt voluptatum ipsam nemo, dolore amet expedita, explicabo minima. Id consequuntur distinctio fugiat quam est corporis cumque, iure saepe accusamus perferendis exercitationem vel veniam obcaecati cum incidunt harum itaque fuga quia sint? Quibusdam.</p>
                </div>
                <div>
                    <h2 className="font-bold text-center text-lg text-white mb-4">Quick Links</h2>
                    <div className="flex flex-col items-center">
                        <a href="#" className="hover:text-white transition-colors duration-300">Home</a>
                        <a href="#" className="hover:text-white transition-colors duration-300">About Us</a>
                        <a href="#" className="hover:text-white transition-colors duration-300">Courses</a>
                        <a href="#" className="hover:text-white transition-colors duration-300">Services</a>
                        <a href="#" className="hover:text-white transition-colors duration-300">Contact Us</a>
                    </div>
                </div>
                <div>
                    <h2 className="font-bold text-center text-lg text-white mb-4">Follow Us</h2>
                    <div className="flex flex-col items-center">
                        <a href="#" className="hover:text-white transition-colors duration-300">Facebook</a>
                        <a href="#" className="hover:text-white transition-colors duration-300">Twitter</a>
                        <a href="#" className="hover:text-white transition-colors duration-300">Instagram</a>
                        <a href="#" className="hover:text-white transition-colors duration-300">Youtube</a>
                    </div>
                </div>
                <div>
                    <h2 className="font-bold text-center text-lg text-white mb-4">Contact Us</h2>
                    <div className="flex flex-col text-center items-center">
                        <p>Address: 123 Main Street, Springfield, IL 62704</p>
                        <p>City: Springfield</p>
                        <p>State: IL</p>
                        <p>Zip: 62704</p>
                        <p>Phone: (555) 123-4567</p>
                        <p>Email: <a href={`mailto:${'contact@example.com'}`}>contact@example.com</a></p>
                    </div>
                </div>
            </div>
            <p className="text-center text-xs pt-8">
                ©MyApp 2024 All Right Reserved.
            </p>
        </footer>
    )
}