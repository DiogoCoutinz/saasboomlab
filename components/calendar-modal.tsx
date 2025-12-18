"use client"

import { useState } from "react"
import { X, Calendar, Clock, ChevronLeft, ChevronRight, Check } from "lucide-react"
import { Button } from "@/components/ui/button"

interface CalendarModalProps {
  isOpen: boolean
  onClose: () => void
  productName?: string
  duration?: string
  accentColor?: string
}

export function CalendarModal({ 
  isOpen, 
  onClose, 
  productName = "BoomLab",
  duration = "30 min",
  accentColor = "cyan"
}: CalendarModalProps) {
  const [selectedDate, setSelectedDate] = useState<number | null>(null)
  const [selectedTime, setSelectedTime] = useState<string | null>(null)
  const [isConfirmed, setIsConfirmed] = useState(false)

  if (!isOpen) return null

  const dates = [
    { day: "Seg", date: 18, month: "Dez" },
    { day: "Ter", date: 19, month: "Dez" },
    { day: "Qua", date: 20, month: "Dez" },
    { day: "Qui", date: 21, month: "Dez" },
    { day: "Sex", date: 22, month: "Dez" },
  ]

  const timeSlots = [
    "09:00", "10:00", "11:00", "14:00", "15:00", "16:00", "17:00"
  ]

  const getAccentClasses = () => {
    switch(accentColor) {
      case "cyan":
        return {
          bg: "bg-gradient-to-r from-cyan-500 to-teal-500",
          hover: "hover:bg-cyan-500/20",
          border: "border-cyan-500",
          text: "text-cyan-400",
          ring: "ring-cyan-500/50"
        }
      case "blue":
        return {
          bg: "bg-gradient-to-r from-blue-500 to-indigo-500",
          hover: "hover:bg-blue-500/20",
          border: "border-blue-500",
          text: "text-blue-400",
          ring: "ring-blue-500/50"
        }
      case "purple":
        return {
          bg: "bg-gradient-to-r from-purple-500 to-pink-500",
          hover: "hover:bg-purple-500/20",
          border: "border-purple-500",
          text: "text-purple-400",
          ring: "ring-purple-500/50"
        }
      default:
        return {
          bg: "bg-gradient-to-r from-cyan-500 to-teal-500",
          hover: "hover:bg-cyan-500/20",
          border: "border-cyan-500",
          text: "text-cyan-400",
          ring: "ring-cyan-500/50"
        }
    }
  }

  const accent = getAccentClasses()

  const handleConfirm = () => {
    setIsConfirmed(true)
    setTimeout(() => {
      onClose()
      setIsConfirmed(false)
      setSelectedDate(null)
      setSelectedTime(null)
    }, 2000)
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
      <div className="relative w-full max-w-4xl bg-[#0a0a0a] rounded-2xl border border-white/10 shadow-2xl overflow-hidden">
        {/* Header */}
        <div className="relative p-6 border-b border-white/10">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-2xl font-bold text-white mb-1">
                Agendar Reunião - {productName}
              </h2>
              <div className="flex items-center gap-2 text-gray-400">
                <Clock className="w-4 h-4" />
                <span className="text-sm">Duração: {duration}</span>
              </div>
            </div>
            <button
              onClick={onClose}
              className="w-10 h-10 rounded-lg bg-white/5 hover:bg-white/10 flex items-center justify-center transition-colors"
            >
              <X className="w-5 h-5 text-gray-400" />
            </button>
          </div>
        </div>

        {/* Content */}
        <div className="p-6">
          {!isConfirmed ? (
            <div className="grid lg:grid-cols-2 gap-8">
              {/* Left - Date Selection */}
              <div>
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-lg font-semibold text-white flex items-center gap-2">
                    <Calendar className="w-5 h-5" />
                    Seleciona uma data
                  </h3>
                  <div className="flex gap-2">
                    <button className="w-8 h-8 rounded-lg bg-white/5 hover:bg-white/10 flex items-center justify-center transition-colors">
                      <ChevronLeft className="w-4 h-4 text-gray-400" />
                    </button>
                    <button className="w-8 h-8 rounded-lg bg-white/5 hover:bg-white/10 flex items-center justify-center transition-colors">
                      <ChevronRight className="w-4 h-4 text-gray-400" />
                    </button>
                  </div>
                </div>

                <div className="grid grid-cols-5 gap-3">
                  {dates.map((dateInfo) => (
                    <button
                      key={dateInfo.date}
                      onClick={() => setSelectedDate(dateInfo.date)}
                      className={`p-4 rounded-xl border-2 transition-all duration-300 ${
                        selectedDate === dateInfo.date
                          ? `${accent.border} bg-white/5 ring-2 ${accent.ring}`
                          : "border-white/10 bg-white/5 hover:bg-white/10"
                      }`}
                    >
                      <div className="text-center">
                        <div className={`text-xs font-medium mb-1 ${
                          selectedDate === dateInfo.date ? accent.text : "text-gray-400"
                        }`}>
                          {dateInfo.day}
                        </div>
                        <div className={`text-2xl font-bold ${
                          selectedDate === dateInfo.date ? "text-white" : "text-gray-300"
                        }`}>
                          {dateInfo.date}
                        </div>
                        <div className="text-xs text-gray-500 mt-1">
                          {dateInfo.month}
                        </div>
                      </div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Right - Time Selection */}
              <div>
                <h3 className="text-lg font-semibold text-white mb-6 flex items-center gap-2">
                  <Clock className="w-5 h-5" />
                  Seleciona um horário
                </h3>

                <div className="grid grid-cols-2 gap-3 max-h-[320px] overflow-y-auto pr-2 custom-scrollbar">
                  {timeSlots.map((time) => (
                    <button
                      key={time}
                      onClick={() => setSelectedTime(time)}
                      disabled={!selectedDate}
                      className={`p-4 rounded-xl border-2 font-semibold transition-all duration-300 ${
                        !selectedDate
                          ? "border-white/5 bg-white/5 text-gray-600 cursor-not-allowed"
                          : selectedTime === time
                          ? `${accent.border} ${accent.text} bg-white/5 ring-2 ${accent.ring}`
                          : `border-white/10 bg-white/5 text-gray-300 ${accent.hover}`
                      }`}
                    >
                      {time}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          ) : (
            // Confirmation Screen
            <div className="text-center py-12">
              <div className={`w-20 h-20 rounded-full ${accent.bg} mx-auto mb-6 flex items-center justify-center`}>
                <Check className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">
                Reunião Agendada!
              </h3>
              <p className="text-gray-400 text-lg mb-4">
                {dates.find(d => d.selectedDate === selectedDate)?.day}, {selectedDate} de Dezembro às {selectedTime}
              </p>
              <p className="text-gray-500">
                Vais receber um email de confirmação em breve
              </p>
            </div>
          )}
        </div>

        {/* Footer */}
        {!isConfirmed && (
          <div className="p-6 border-t border-white/10 bg-white/5">
            <div className="flex items-center justify-between">
              <div className="text-sm text-gray-400">
                {selectedDate && selectedTime ? (
                  <span className="text-white font-medium">
                    {dates.find(d => d.date === selectedDate)?.day}, {selectedDate} de Dezembro às {selectedTime}
                  </span>
                ) : (
                  <span>Seleciona data e horário</span>
                )}
              </div>
              <Button
                onClick={handleConfirm}
                disabled={!selectedDate || !selectedTime}
                className={`${accent.bg} hover:opacity-90 text-white font-semibold px-8 py-3 rounded-xl transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed`}
              >
                Confirmar Agendamento
              </Button>
            </div>
          </div>
        )}
      </div>

      <style jsx>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 6px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: rgba(255, 255, 255, 0.05);
          border-radius: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: rgba(255, 255, 255, 0.1);
          border-radius: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: rgba(255, 255, 255, 0.2);
        }
      `}</style>
    </div>
  )
}



