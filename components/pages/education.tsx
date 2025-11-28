import { BookOpen, Download, AlertCircle, CheckCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"

const guides = [
  {
    title: "Guía Completa de Etiquetas",
    description: "17 páginas",
    size: "2.5 MB",
  },
  {
    title: "Lista de Compras Saludables",
    description: "4 páginas",
    size: "1.2 MB",
  },
  {
    title: "Porciones Recomendadas por Edad",
    description: "9 páginas",
    size: "1.4 MB",
  },
  {
    title: "Recetario de Lunch Escolares",
    description: "27 páginas",
    size: "2.3 MB",
  },
  {
    title: "Calendario de Frutas de Temporada",
    description: "7 páginas",
    size: "800 kB",
  },
  {
    title: "Infografía Nutricional",
    description: "1 página",
    size: "500 kB",
  },
]

export default function Education() {
  return (
    <div className="space-y-8">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold text-orange-600 mb-2">Guías de Educación Nutricional</h1>
        <p className="text-gray-600">Información verificada por expertos sobre alimentación infantil saludable</p>
      </div>

      {/* Reading Labels */}
      <Card className="p-6">
        <h3 className="text-2xl font-bold text-orange-600 mb-4">Cómo Leer Etiquetas Nutricionales</h3>
        <div className="grid grid-cols-2 gap-8">
          <div>
            <h4 className="font-bold text-gray-800 mb-3">Ejemplo de Etiqueta Nutricional</h4>
            <Card className="p-4 border-orange-300 bg-orange-50">
              <div className="space-y-3 text-sm">
                <div>
                  <span className="font-semibold">Información Nutricional</span>
                  <p className="text-xs text-gray-600">Porción: 30g (1/2 taza)</p>
                  <p className="text-xs text-gray-600">Porciones por envase: 10</p>
                </div>
                <div className="border-t border-orange-200 pt-3">
                  <div className="flex justify-between">
                    <span>Calorías</span>
                    <span className="font-semibold">150</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Grasa total</span>
                    <span className="font-semibold">8g</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Sodio</span>
                    <span className="font-semibold">450mg</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Carbohidratos</span>
                    <span className="font-semibold">20g</span>
                  </div>
                  <div className="flex justify-between">
                    <span>* Azúcares</span>
                    <span className="font-semibold text-red-600">15g</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Proteínas</span>
                    <span className="font-semibold">3g</span>
                  </div>
                </div>
              </div>
            </Card>
          </div>
          <div>
            <h4 className="font-bold text-gray-800 mb-3">Cómo Interpretarla</h4>
            <div className="space-y-3">
              <div className="flex gap-3">
                <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-1" />
                <div>
                  <p className="font-semibold text-gray-800">Comienza por la porción</p>
                  <p className="text-sm text-gray-600">Todos los números se basan en esta cantidad</p>
                </div>
              </div>
              <div className="flex gap-3">
                <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-1" />
                <div>
                  <p className="font-semibold text-gray-800">Identifica los nutrientes clave</p>
                  <p className="text-sm text-gray-600">Sodio, grasa y azúcares son principales a monitorear</p>
                </div>
              </div>
              <div className="flex gap-3">
                <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-1" />
                <div>
                  <p className="font-semibold text-gray-800">Revisa el % diario recomendado</p>
                  <p className="text-sm text-gray-600">Ayuda a determinar si el nutriente es alto o bajo</p>
                </div>
              </div>
              <div className="flex gap-3">
                <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-1" />
                <div>
                  <p className="font-semibold text-gray-800">Compara productos similares</p>
                  <p className="text-sm text-gray-600">Elige opciones con menos azúcar y sodio</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Card>

      {/* Hidden Sugar Names */}
      <Card className="p-6 border-t-4 border-orange-600">
        <h3 className="text-2xl font-bold text-orange-600 mb-4 flex items-center gap-2">
          <AlertCircle className="w-6 h-6" />
          Nombres Ocultos del Azúcar
        </h3>
        <p className="text-gray-600 mb-4">
          El azúcar se esconde bajo muchos nombres en las etiquetas. Aprende a identificarlos:
        </p>
        <div className="grid grid-cols-4 gap-3">
          {[
            "Jarabe de maíz",
            "Fructosa",
            "Dextrosa",
            "Maltosa",
            "Sacarosa",
            "Glucosa",
            "Mielaza",
            "Sirope",
            "Néctar de agave",
            "Miel de caña",
            "Azúcar invertido",
            "Jugo de caña",
          ].map((name) => (
            <Card key={name} className="p-3 bg-red-50 border border-red-200 text-center">
              <p className="text-sm font-semibold text-red-600">{name}</p>
            </Card>
          ))}
        </div>
      </Card>

      {/* Traffic Light System */}
      <Card className="p-6">
        <h3 className="text-2xl font-bold text-gray-800 mb-4">Sistema de Semáforo Nutricional</h3>
        <div className="grid grid-cols-3 gap-6">
          {[
            {
              color: "green",
              title: "Verde - Consumo Libre",
              items: ["Frutas y verduras frescas", "Agua natural", "Legumbres", "Frutos secos sin sal"],
            },
            {
              color: "yellow",
              title: "Amarillo - Con Moderación",
              items: ["Cereales integrales", "Lácteos bajos en grasa", "Carnes magras", "Pan integral"],
            },
            {
              color: "red",
              title: "Rojo - Limitar/Evitar",
              items: [
                "Refrescos y bebidas azucaradas",
                "Dulces y galletas",
                "Comida rápida",
                "Productos ultraprocesados",
              ],
            },
          ].map((system) => (
            <div
              key={system.title}
              className={`p-4 rounded-lg border-2 ${
                system.color === "green"
                  ? "border-green-500 bg-green-50"
                  : system.color === "yellow"
                    ? "border-yellow-500 bg-yellow-50"
                    : "border-red-500 bg-red-50"
              }`}
            >
              <div
                className={`w-6 h-6 rounded-full mx-auto mb-3 ${
                  system.color === "green" ? "bg-green-500" : system.color === "yellow" ? "bg-yellow-500" : "bg-red-500"
                }`}
              />
              <h4
                className={`font-bold text-center mb-3 ${
                  system.color === "green"
                    ? "text-green-700"
                    : system.color === "yellow"
                      ? "text-yellow-700"
                      : "text-red-700"
                }`}
              >
                {system.title}
              </h4>
              <ul className="space-y-2">
                {system.items.map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm">
                    <span className="flex-shrink-0">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Card>

      {/* Downloadable Guides */}
      <div>
        <h3 className="text-2xl font-bold text-gray-800 mb-4">Guías Descargables</h3>
        <div className="grid grid-cols-3 gap-6">
          {guides.map((guide) => (
            <Card key={guide.title} className="p-6 text-center hover:shadow-lg transition">
              <div className="bg-orange-100 w-16 h-16 rounded-lg flex items-center justify-center mx-auto mb-4">
                <BookOpen className="w-8 h-8 text-orange-600" />
              </div>
              <h4 className="font-bold text-gray-800 mb-2">{guide.title}</h4>
              <p className="text-xs text-gray-600 mb-1">{guide.description}</p>
              <p className="text-xs text-gray-600 mb-4">{guide.size}</p>
              <Button className="w-full bg-orange-600 hover:bg-orange-700 text-sm">
                <Download className="w-3 h-3 mr-2" /> Descargar PDF
              </Button>
            </Card>
          ))}
        </div>
      </div>

      {/* Quick Tips for Supermarket */}
      <Card className="bg-orange-600 text-white p-8">
        <h3 className="text-2xl font-bold mb-6">Consejos Rápidos para el Supermercado</h3>
        <div className="grid grid-cols-2 gap-6">
          <div>
            <h4 className="font-bold mb-2">Compra el Primero</h4>
            <p className="text-sm">
              Los alimentos en la sección frontal están diseñados para atraer. Compra lo que necesitas del supermercado
            </p>
          </div>
          <div>
            <h4 className="font-bold mb-2">Lee los Primeros 3 Ingredientes</h4>
            <p className="text-sm">
              Son los que están en mayor cantidad en el producto. Si los primeros son azúcar o químicos, evítalo
            </p>
          </div>
          <div>
            <h4 className="font-bold mb-2">Menus de 5 Ingredientes</h4>
            <p className="text-sm">Los mayores productos tienen listas cortas de ingredientes reconocibles</p>
          </div>
          <div>
            <h4 className="font-bold mb-2">Si no Pronuncias, no lo Compres</h4>
            <p className="text-sm">Evita productos con ingredientes complicados y químicos</p>
          </div>
        </div>
      </Card>
    </div>
  )
}
