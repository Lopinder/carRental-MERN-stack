import React from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import heroVideo from '../images/videos/golf.mp4'
import fleetOne from '../images/images/bmw.jpeg'
import fleetTwo from '../images/images/gg.jpeg'
import fleetThree from '../images/images/four.avif'

function About() {
    const { scrollYProgress } = useScroll()
    const heroScale = useTransform(scrollYProgress, [0, 0.3], [1, 1.1])
    const heroOpacity = useTransform(scrollYProgress, [0, 0.3], [1, 0.6])
    const y1 = useTransform(scrollYProgress, [0, 1], [0, 120])
    const y2 = useTransform(scrollYProgress, [0, 1], [0, 160])
    const y3 = useTransform(scrollYProgress, [0, 1], [0, 200])

    return (
        <div className='w-full min-h-screen text-white'>
            {/* Hero */}
            <div className='relative w-full h-[60vh] overflow-hidden rounded-b-3xl'>
                <motion.video
                    className='absolute inset-0 w-full h-full object-cover'
                    src={heroVideo}
                    autoPlay
                    muted
                    loop
                    style={{ scale: heroScale, opacity: heroOpacity }}
                />
                <div className='absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/70' />
                <div className='relative z-10 max-w-screen-xl mx-auto h-full flex items-center px-6'>
                    <div>
                        <motion.h1
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, ease: 'easeOut' }}
                            className='text-4xl md:text-6xl font-semibold tracking-tight'
                        >
                            About Zoomo
                        </motion.h1>
                        <motion.p
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.15, duration: 0.6, ease: 'easeOut' }}
                            className='mt-3 max-w-2xl text-zinc-300'
                        >
                            We make premium cars accessible with a seamless rental experience. Choose, book, and drive—anytime, anywhere.
                        </motion.p>
                    </div>
                </div>
            </div>

            {/* Mission */}
            <section className='max-w-screen-xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-10 items-center'>
                <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: '-80px' }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className='text-3xl md:text-4xl font-semibold'>Our Mission</h2>
                    <p className='mt-4 text-zinc-400 leading-relaxed'>
                        At Zoomo, we believe travel should be effortless. That’s why we curate a
                        fleet of well‑maintained vehicles and deliver an intuitive booking journey—so your time is spent enjoying the road, not paperwork.
                    </p>
                    <div className='mt-6 grid grid-cols-3 gap-4'>
                        <motion.div whileHover={{ scale: 1.03 }} className='bg-black/60 border border-zinc-800 rounded-xl p-4'>
                            <h4 className='text-lg font-medium'>Flexible</h4>
                            <p className='text-zinc-500 text-sm mt-1'>Hourly to long‑term rentals</p>
                        </motion.div>
                        <motion.div whileHover={{ scale: 1.03 }} className='bg-black/60 border border-zinc-800 rounded-xl p-4'>
                            <h4 className='text-lg font-medium'>Premium</h4>
                            <p className='text-zinc-500 text-sm mt-1'>Top brands and trims</p>
                        </motion.div>
                        <motion.div whileHover={{ scale: 1.03 }} className='bg-black/60 border border-zinc-800 rounded-xl p-4'>
                            <h4 className='text-lg font-medium'>Reliable</h4>
                            <p className='text-zinc-500 text-sm mt-1'>24×7 support</p>
                        </motion.div>
                    </div>
                </motion.div>
                <div className='relative'>
                    <motion.img
                        src={fleetOne}
                        className='w-full h-72 object-cover rounded-2xl'
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    />
                    <motion.img
                        src={fleetTwo}
                        className='w-48 h-32 object-cover rounded-xl absolute -right-6 -bottom-6 border border-zinc-800'
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.15, duration: 0.6 }}
                        style={{ y: y1 }}
                    />
                    <motion.img
                        src={fleetThree}
                        className='w-40 h-28 object-cover rounded-xl absolute left-4 -bottom-10 border border-zinc-800'
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.25, duration: 0.6 }}
                        style={{ y: y2 }}
                    />
                </div>
            </section>

            {/* Stats */}
            <section className='max-w-screen-xl mx-auto px-6 pb-10'>
                <div className='grid sm:grid-cols-3 gap-4'>
                    {[{ label: 'Happy Customers', value: '50K+' }, { label: 'Trips Completed', value: '120K+' }, { label: 'Cities', value: '35+' }].map((s, i) => (
                        <motion.div
                            key={s.label}
                            className='bg-black/60 border border-zinc-800 rounded-2xl p-6 text-center'
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1, duration: 0.5 }}
                            style={{ y: i === 0 ? y1 : i === 1 ? y2 : y3 }}
                        >
                            <div className='text-3xl font-semibold'>{s.value}</div>
                            <div className='text-zinc-500 mt-1'>{s.label}</div>
                        </motion.div>
                    ))}
                </div>
            </section>
<br></br>
<br></br>
<br></br>
<br></br>
<br></br>
<br></br>
<br></br>
<br></br>
<br></br>
<br></br>

            {/* Footer */}
            <motion.footer
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, ease: 'easeOut' }}
                className="bg-black/70 backdrop-blur-sm border-t border-zinc-800 mt-10"
            >
                
                <div className="max-w-screen-xl mx-auto px-6 py-10 grid md:grid-cols-3 gap-8 text-zinc-400 text-sm">
                    {/* Brand Info */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1, duration: 0.6 }}
                    >
                        <h3 className="text-white text-lg font-semibold">Zoomo</h3>
                        <p className="mt-2">
                            Premium car rentals, made simple. Travel how you want, when you want.
                        </p>
                    </motion.div>

                    {/* Links */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2, duration: 0.6 }}
                    >
                        <h4 className="text-white font-medium mb-2">Quick Links</h4>
                        <ul className="space-y-1">
                            <li><a href="/" className="hover:text-white transition">Home</a></li>
                            <li><a href="/about" className="hover:text-white transition">About</a></li>
                            {/* <li><a href="/fleet" className="hover:text-white transition">Fleet</a></li> */}
                            <li><a href="/contact" className="hover:text-white transition">Contact</a></li>
                        </ul>
                    </motion.div>

                    {/* Contact */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3, duration: 0.6 }}
                    >
                        <h4 className="text-white font-medium mb-2">Contact Us</h4>
                        <p>Email: zoomo@gmail.com</p>
                        <p>Phone: +91 8627069119</p>
                        <p>Address: Chitkara University</p>
                    </motion.div>
                </div>

                <motion.div
                    className="text-center text-zinc-600 text-xs border-t border-zinc-800 py-4"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5, duration: 0.5 }}
                >
                    &copy; {new Date().getFullYear()} Zoomo. All rights reserved.
                </motion.div>
            </motion.footer>
        </div>
    )
}

export default About
