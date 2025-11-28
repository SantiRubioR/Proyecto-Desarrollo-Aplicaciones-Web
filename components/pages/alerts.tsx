import { AlertCircle, Play, FileText } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"

const testimonialVideos = [
  {
    title: "Alimentación Saludable para Niños",
    author: "Nutricionista",
    duration: "10:45",
  },
  {
    title: "Azúcar Oculto en Alimentos Infantiles",
    author: "Nutricionista",
    duration: "8:30",
  },
  {
    title: "Cómo Reducir el Azúcar en la Dieta",
    author: "Nutricionista",
    duration: "12:15",
  },
]

const pediatricsVideos = [
  {
    title: "Nutrición Infantil: Conceptos Básicos",
    author: "Pediatra",
    duration: "14:30",
  },
  {
    title: "Obesidad Infantil: Prevención",
    author: "Pediatra",
    duration: "9:45",
  },
  {
    title: "Hábitos Saludables desde la Infancia",
    author: "Pediatra",
    duration: "11:20",
  },
]

const articles = [
  {
    title: "El Impacto del Azúcar en el Desarrollo Infantil",
    description:
      "Estudios recientes demuestran que el consumo excesivo de azúcar puede afectar el desarrollo cognitivo y físico de los niños.",
    readTime: "5 min lectura",
  },
  {
    title: "Alimentos Procesados: Lo que Deben Saber",
    description:
      "Muchos productos dirigidos a niños contienen cantidades alarmantes de azúcar, sodio y aditivos químicos.",
    readTime: "4 min lectura",
  },
  {
    title: "Cómo Leer las Etiquetas Nutricionales",
    description: "Aprende a identificar ingredientes nocivos mientras cocinas juntos.",
    readTime: "4 min lectura",
  },
  {
    title: "Alternativas Saludables para Snacks",
    description: "Descubre opciones nutritivas que les encantarán a tus hijos sin comprometer su salud.",
    readTime: "5 min lectura",
  },
]

export default function Alerts() {
  return (
    <div className="space-y-8">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold text-red-600 mb-2">Alerta y Concienzación</h1>
        <p className="text-gray-600">Información verificada por expertos sobre alimentación infantil saludable</p>
      </div>

      {/* Main Alert */}
      <Card className="bg-red-50 border-l-4 border-red-600 p-6">
        <div className="flex gap-4">
          <AlertCircle className="w-8 h-8 text-red-600 flex-shrink-0 mt-1" />
          <div>
            <h3 className="text-2xl font-bold text-red-600 mb-2">⚠️ Alerta Importante sobre el Azúcar</h3>
            <p className="text-gray-700 mb-4">
              La OMS recomienda que los niños no consuman más de 25g de azúcar al día. El exceso de azúcar relacionado
              con obesidad, diabetes tipo 2 y problemas cardiovasculares desde edades tempranas.
            </p>
            <Button className="bg-red-600 hover:bg-red-700 text-white">Leer el estudio completo</Button>
          </div>
        </div>
      </Card>

      {/* Nutritionist Videos */}
      <div>
        <h3 className="text-2xl font-bold text-gray-800 mb-4">Videos de Nutricionistas</h3>
        <div className="grid grid-cols-3 gap-6">
          {testimonialVideos.map((video) => (
            <Card key={video.title} className="overflow-hidden hover:shadow-lg transition">
              <div className="relative h-40 bg-gray-400 flex items-center justify-center cursor-pointer hover:bg-gray-500 transition group">
                <button className="bg-orange-600 p-4 rounded-full text-white hover:bg-orange-700 group-hover:scale-110 transition">
                  <Play className="w-6 h-6" />
                </button>
                <span className="absolute bottom-2 right-2 bg-black text-white text-xs px-2 py-1 rounded">
                  {video.duration}
                </span>
              </div>
              <div className="p-4">
                <p className="font-semibold text-gray-800 text-sm mb-1">{video.title}</p>
                <p className="text-xs text-gray-600 mb-3">{video.author}</p>
                <Button variant="outline" className="w-full text-orange-600 border-orange-600 text-xs bg-transparent">
                  Ver video
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </div>

      {/* Pediatric Videos */}
      <div>
        <h3 className="text-2xl font-bold text-gray-800 mb-4">Videos de Pediatras</h3>
        <div className="grid grid-cols-3 gap-6">
          {pediatricsVideos.map((video) => (
            <Card key={video.title} className="overflow-hidden hover:shadow-lg transition">
              <div className="relative h-40 bg-gray-400 flex items-center justify-center cursor-pointer hover:bg-gray-500 transition group">
                <button className="bg-orange-600 p-4 rounded-full text-white hover:bg-orange-700 group-hover:scale-110 transition">
                  <Play className="w-6 h-6" />
                </button>
                <span className="absolute bottom-2 right-2 bg-black text-white text-xs px-2 py-1 rounded">
                  {video.duration}
                </span>
              </div>
              <div className="p-4">
                <p className="font-semibold text-gray-800 text-sm mb-1">{video.title}</p>
                <p className="text-xs text-gray-600 mb-3">{video.author}</p>
                <Button variant="outline" className="w-full text-orange-600 border-orange-600 text-xs bg-transparent">
                  Ver video
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </div>

      {/* Informative Articles */}
      <div>
        <h3 className="text-2xl font-bold text-gray-800 mb-4">Artículos Informativos</h3>
        <div className="space-y-3">
          {articles.map((article) => (
            <Card key={article.title} className="p-4 hover:shadow-lg transition flex gap-4">
              <div className="bg-orange-100 p-3 rounded-lg flex-shrink-0">
                <FileText className="w-6 h-6 text-orange-600" />
              </div>
              <div className="flex-1">
                <h4 className="font-bold text-gray-800 mb-1">{article.title}</h4>
                <p className="text-sm text-gray-600 mb-3">{article.description}</p>
                <div className="flex items-center justify-between">
                  <span className="text-xs text-gray-500">{article.readTime}</span>
                  <Button variant="link" className="text-orange-600 text-xs h-auto p-0">
                    Leer más →
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>

      {/* Important Data */}
      <Card className="bg-orange-600 text-white p-8">
        <div className="flex items-center gap-4 mb-6">
          <AlertCircle className="w-10 h-10" />
          <h3 className="text-2xl font-bold">Datos Importantes</h3>
        </div>
        <div className="grid grid-cols-3 gap-8">
          <div>
            <p className="text-4xl font-bold mb-2">1 de 3</p>
            <p className="text-lg">Niños tiene sobrepeso u obesidad</p>
          </div>
          <div>
            <p className="text-4xl font-bold mb-2">70%</p>
            <p className="text-lg">De productos infantiles tienen exceso de azúcar</p>
          </div>
          <div>
            <p className="text-4xl font-bold mb-2">25g</p>
            <p className="text-lg">Es el límite diario de azúcar recomendado</p>
          </div>
        </div>
      </Card>

      {/* More Information CTA */}
      <Card className="bg-blue-50 border border-blue-200 p-8 text-center">
        <h3 className="text-2xl font-bold text-blue-700 mb-3">¿Necesitas más información?</h3>
        <p className="text-gray-700 mb-6">
          Consulta nuestras guías educativas para aprender a interpretar etiquetas nutricionales
        </p>
        <Button className="bg-orange-600 hover:bg-orange-700">Ver Guías Educativas</Button>
      </Card>
    </div>
  )
}
