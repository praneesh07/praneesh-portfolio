import { motion } from 'framer-motion';
import { Instagram, Mail, MapPin, } from 'lucide-react';

export default function App() {


  const skills = [
    'Video Editing',
    'Color Grading',
    'Motion Graphics',
    'Sound Design',
    'Visual Effects'
  ];

  const software = [
    { name: 'Adobe Premiere Pro', image: '/imports/premiere-pro.svg' },
    { name: 'Adobe After Effects', image: '/imports/after-effects.svg' },
    { name: 'Adobe Photoshop', image: '/imports/photoshop.svg' }
  ];

  const projects = [
    {
      title: 'Speed SFX Edit',
      video: '/imports/speed-sfx-edit.mp4',
      thumbnail: '/imports/speed-thumb.webp'
    },
    {
      title: 'Cinematic Edit',
      video: '/imports/cinematic-edit.mp4',
      thumbnail: '/imports/cinematic-thumb.webp'
    },
    {
      title: 'Reels Edit',
      video: '/imports/reels-edit.mp4',
      thumbnail: '/imports/reels-thumb.webp'
    },
    {
      title: 'Podcast Edit',
      video: '/imports/podcast-edit.mp4',
      thumbnail: '/imports/podcast-thumb.webp'
    }
  ];

  const services = [
    'Video Editing',
    'Color Grading',
    'Motion Graphics',
    'Sound Design'
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.2 }}
      className="min-h-screen bg-black text-white overflow-x-hidden">
      {/* Animated Background */}
      <div className="fixed inset-0 bg-gradient-to-br from-black via-purple-950/20 to-black">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgxNDcsMTI5LDI1NSwwLjEpIiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-30"></div>
      </div>

      <div className="relative z-10">
        {/* Hero Banner */}
        <section className="relative w-full">
          <div className="w-full">
            <img
              src="/imports/ChatGPT_Image_May_15__2026__03_14_18_PM.webp"
              alt="Praneesh - Video Editor Portfolio"
              className="w-full h-auto object-cover"
            />
          </div>
        </section>

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-purple-500/50 to-transparent max-w-6xl mx-auto"></div>

        {/* About Section */}
        <section className="py-16 md:py-32 px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center space-y-6">
              <h2 className="text-5xl md:text-7xl font-black tracking-tight">
                <span className="bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent">
                  ABOUT ME
                </span>
              </h2>
              <div className="max-w-3xl mx-auto p-8 rounded-2xl border border-purple-500/20 bg-purple-950/10 backdrop-blur-md">
                <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
                  I'm a passionate video editor who believes in the power of cinematic storytelling.
                  Every frame is an opportunity to evoke emotion, every cut a chance to create magic.
                  With years of experience in transforming raw footage into compelling visual narratives,
                  I bring stories to life through the art of editing.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-purple-500/50 to-transparent max-w-6xl mx-auto"></div>

        {/* Skills Section */}
        <section className="py-16 md:py-32 px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-5xl md:text-7xl font-black text-center mb-16 tracking-tight">
              <span className="bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent">
                SKILLS
              </span>
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {skills.map((skill, index) => (
                <div
                  key={index}
                  className="group relative p-8 rounded-xl border border-purple-500/30 bg-gradient-to-br from-purple-950/20 to-black/40 backdrop-blur-md hover:border-purple-400/60 transition-all duration-300 hover:shadow-[0_0_30px_rgba(168,85,247,0.3)]"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-600/0 to-purple-600/10 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  <h3 className="text-2xl font-bold text-white relative z-10 group-hover:text-purple-300 transition-colors">
                    {skill}
                  </h3>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-purple-500/50 to-transparent max-w-6xl mx-auto"></div>

        {/* Software Section */}
        <section className="py-16 md:py-32 px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-5xl md:text-7xl font-black text-center mb-16 tracking-tight">
              <span className="bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent">
                SOFTWARE
              </span>
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {software.map((item, index) => (
                <div
                  key={index}
                  className="relative p-10 rounded-2xl border border-purple-500/30 bg-gradient-to-br from-black/60 to-purple-950/20 backdrop-blur-lg hover:border-purple-400/60 transition-all duration-300 hover:shadow-[0_0_40px_rgba(168,85,247,0.4)] group"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-600/0 to-purple-600/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  <div className="text-center space-y-4 relative z-10">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-20 h-20 mx-auto object-contain drop-shadow-[0_0_20px_rgba(168,85,247,0.5)]"
                    />
                    <h3 className="text-xl font-bold text-white group-hover:text-purple-300 transition-colors">
                      {item.name}
                    </h3>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-purple-500/50 to-transparent max-w-6xl mx-auto"></div>

        {/* Featured Works Section */}
        <section className="py-16 md:py-32 px-4">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-5xl md:text-7xl font-black text-center mb-16 tracking-tight">
              <span className="bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent">
                FEATURED WORKS
              </span>
            </h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {projects.map((project, index) => (
                <div
                  key={index}
                  className="group relative aspect-video rounded-xl overflow-hidden border border-purple-500/30 hover:border-purple-400/60 transition-all duration-300 hover:shadow-[0_0_40px_rgba(168,85,247,0.4)] cursor-pointer"
                >

                  {/* Video */}
                  <video
                    src={project.video}
                    poster={project.thumbnail}
                    muted
                    loop
                    autoPlay
                    playsInline
                    preload="auto"
                    className={`w-full h-full transition-transform duration-500 group-hover:scale-110 ${project.title === 'Reels Edit'
                      ? 'object-contain bg-black'
                      : 'object-cover'
                      }`}
                  />

                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-80 group-hover:opacity-90 transition-opacity pointer-events-none"></div>



                  {/* Title */}
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <h3 className="text-xl font-bold text-white">
                      {project.title}
                    </h3>
                  </div>

                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-purple-500/50 to-transparent max-w-6xl mx-auto"></div>

        {/* Services Section */}
        <section className="py-16 md:py-32 px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-5xl md:text-7xl font-black text-center mb-16 tracking-tight">
              <span className="bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent">
                SERVICES
              </span>
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {services.map((service, index) => (
                <div
                  key={index}
                  className="relative p-10 rounded-2xl border border-purple-500/30 bg-gradient-to-br from-purple-950/20 to-black/40 backdrop-blur-md hover:border-purple-400/60 transition-all duration-300 hover:shadow-[0_0_30px_rgba(168,85,247,0.3)] group"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-600/0 to-purple-600/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  <h3 className="text-3xl font-bold text-white relative z-10 group-hover:text-purple-300 transition-colors">
                    {service}
                  </h3>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-purple-500/50 to-transparent max-w-6xl mx-auto"></div>

        {/* Contact Footer */}
        <section className="py-16 md:py-32 px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center space-y-12">
              <h2 className="text-5xl md:text-7xl font-black tracking-tight">
                <span className="bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent">
                  LET'S WORK TOGETHER
                </span>
              </h2>

              <div className="p-10 rounded-2xl border border-purple-500/30 bg-gradient-to-br from-purple-950/20 to-black/40 backdrop-blur-lg space-y-6">
                <div className="flex items-center justify-center gap-3 text-xl">
                  <Mail className="w-6 h-6 text-purple-400" />
                  <span className="text-purple-300">praneeshgaran@gmail.com</span>
                </div>
                <div className="flex items-center justify-center gap-3 text-xl">
                  <MapPin className="w-6 h-6 text-purple-400" />
                  <span className="text-purple-300">
                    Pondicherry, India
                  </span>
                </div>
              </div>

              {/* Quote */}
              <div className="pt-12 space-y-4">
                <div className="h-px bg-gradient-to-r from-transparent via-purple-500/50 to-transparent"></div>
                <p className="text-2xl md:text-3xl font-bold tracking-wide">
                  <span className="bg-gradient-to-r from-white via-purple-200 to-purple-400 bg-clip-text text-transparent">
                    "EDITING IS NOT JUST MY PROFESSION, IT'S MY PASSION."
                  </span>
                </p>

                <div className="flex items-center justify-center gap-8 pt-6">
                  <motion.a
                    whileHover={{ scale: 1.1, color: "#a855f7" }}
                    href="mailto:praneeshgaran@gmail.com"
                    className="text-gray-300 transition-colors duration-300"
                  >
                    <Mail className="w-4 h-4" />
                  </motion.a>

                  <motion.a
                    whileHover={{ scale: 1.1, color: "#a855f7" }}
                    href="https://www.instagram.com/itz_praneesh._07/?__pwa=1#"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-300 transition-colors duration-300"
                  >
                    <Instagram className="w-6 h-6" />
                  </motion.a>
                </div>

                <div className="h-px bg-gradient-to-r from-transparent via-purple-500/50 to-transparent"></div>
              </div>
            </div>
          </div>
        </section>

        {/* Bottom Padding */}
        {/* Copyright */}
        <div className="py-8 text-center border-t border-purple-500/20">
          <p className="text-gray-500 text-sm tracking-wide">
            © 2026 PRANEESH. ALL RIGHTS RESERVED.
          </p>
        </div>

        {/* Bottom Padding */}
        <div className="h-20"></div>
      </div>

    </motion.div>);
}
