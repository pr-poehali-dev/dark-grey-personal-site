import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const Index = () => {
  const skills = [
    {
      category: "Frontend",
      icon: "Code",
      technologies: ["React", "TypeScript", "Next.js", "Tailwind CSS"],
      description: "Создаю современные пользовательские интерфейсы",
    },
    {
      category: "Backend",
      icon: "Server",
      technologies: ["Python", "FastAPI", "PostgreSQL", "Redis"],
      description: "Разрабатываю масштабируемые API и серверную логику",
    },
    {
      category: "DevOps",
      icon: "Cloud",
      technologies: ["Docker", "AWS", "CI/CD", "Kubernetes"],
      description: "Автоматизирую развертывание и мониторинг",
    },
  ];

  const projects = [
    {
      title: "E-commerce Platform",
      description: "Полнофункциональная платформа электронной коммерции",
      tech: ["React", "Python", "PostgreSQL"],
      icon: "ShoppingCart",
    },
    {
      title: "Analytics Dashboard",
      description: "Дашборд для аналитики с real-time данными",
      tech: ["React", "FastAPI", "Redis"],
      icon: "BarChart3",
    },
    {
      title: "CI/CD Pipeline",
      description: "Автоматизированный пайплайн развертывания",
      tech: ["Docker", "AWS", "GitHub Actions"],
      icon: "GitBranch",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-8 animate-fade-in">
            <div className="inline-block p-3 bg-red-500/20 rounded-full mb-6 animate-scale-in">
              <Icon name="Rocket" size={48} className="text-red-400" />
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              Senior Developer
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Fullstack разработчик с фокусом на React, Python и DevOps. Создаю
              современные веб-приложения от идеи до продакшена.
            </p>
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              <Badge
                variant="outline"
                className="text-red-400 border-red-400 hover:bg-red-400/10 transition-all duration-300"
              >
                <Icon name="Code" size={16} className="mr-2" />
                Frontend
              </Badge>
              <Badge
                variant="outline"
                className="text-blue-400 border-blue-400 hover:bg-blue-400/10 transition-all duration-300"
              >
                <Icon name="Server" size={16} className="mr-2" />
                Backend
              </Badge>
              <Badge
                variant="outline"
                className="text-green-400 border-green-400 hover:bg-green-400/10 transition-all duration-300"
              >
                <Icon name="Cloud" size={16} className="mr-2" />
                DevOps
              </Badge>
            </div>
            <div className="flex justify-center gap-4">
              <Button
                size="lg"
                className="bg-red-600 hover:bg-red-700 transition-all duration-300 hover:scale-105"
              >
                <Icon name="Mail" size={20} className="mr-2" />
                Связаться
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-gray-400 text-gray-300 hover:bg-gray-800 transition-all duration-300 hover:scale-105"
              >
                <Icon name="Download" size={20} className="mr-2" />
                Скачать CV
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
            Навыки и технологии
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {skills.map((skill, index) => (
              <Card
                key={index}
                className="bg-slate-800/50 border-slate-700 hover:border-red-500/50 transition-all duration-500 hover:scale-105 group"
              >
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="p-3 bg-red-500/20 rounded-lg mr-4 group-hover:bg-red-500/30 transition-colors duration-300">
                      <Icon
                        name={skill.icon}
                        size={24}
                        className="text-red-400"
                      />
                    </div>
                    <h3 className="text-xl font-semibold text-white">
                      {skill.category}
                    </h3>
                  </div>
                  <p className="text-gray-300 mb-4">{skill.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {skill.technologies.map((tech, techIndex) => (
                      <Badge
                        key={techIndex}
                        variant="secondary"
                        className="bg-slate-700 text-gray-300 hover:bg-slate-600 transition-colors duration-300"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-20 px-4 bg-slate-800/30">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
            Проекты
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <Card
                key={index}
                className="bg-slate-800/50 border-slate-700 hover:border-red-500/50 transition-all duration-500 hover:scale-105 group cursor-pointer"
              >
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="p-3 bg-red-500/20 rounded-lg mr-4 group-hover:bg-red-500/30 transition-colors duration-300">
                      <Icon
                        name={project.icon}
                        size={24}
                        className="text-red-400"
                      />
                    </div>
                    <h3 className="text-xl font-semibold text-white">
                      {project.title}
                    </h3>
                  </div>
                  <p className="text-gray-300 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech, techIndex) => (
                      <Badge
                        key={techIndex}
                        variant="secondary"
                        className="bg-slate-700 text-gray-300 hover:bg-slate-600 transition-colors duration-300"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  <Button
                    variant="outline"
                    size="sm"
                    className="border-red-400 text-red-400 hover:bg-red-400/10 transition-all duration-300"
                  >
                    <Icon name="ExternalLink" size={16} className="mr-2" />
                    Посмотреть
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-8 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
            Готов к новым проектам
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Если у вас есть интересный проект или вакансия, буду рад обсудить
            возможности сотрудничества.
          </p>
          <div className="flex justify-center gap-4">
            <Button
              size="lg"
              className="bg-red-600 hover:bg-red-700 transition-all duration-300 hover:scale-105"
            >
              <Icon name="Mail" size={20} className="mr-2" />
              email@example.com
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-gray-400 text-gray-300 hover:bg-gray-800 transition-all duration-300 hover:scale-105"
            >
              <Icon name="Github" size={20} className="mr-2" />
              GitHub
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-gray-400 text-gray-300 hover:bg-gray-800 transition-all duration-300 hover:scale-105"
            >
              <Icon name="Linkedin" size={20} className="mr-2" />
              LinkedIn
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
