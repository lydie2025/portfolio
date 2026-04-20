import { useRef } from "react"
import { useForm, Controller } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { motion, useInView } from "framer-motion"
import { toast } from "sonner"
import * as z from "zod"
import { Send } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"

const formSchema = z.object({
  fullName: z.string().min(2, "Name is too short"),
  email: z.string().email("Invalid email address"),
  message: z.string().min(10, "Message must be at least 10 characters"),
})

function Contact() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: { fullName: "", email: "", message: "" },
  })

  function onSubmit(data: z.infer<typeof formSchema>) {
    toast.success("Message sent successfully!")
    console.log(data)
  }

  return (
    <section ref={ref} className="flex flex-col items-center px-4 py-16">
      <div className="max-w-5xl mx-auto text-center space-y-4 mb-12">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="text-4xl font-black tracking-tighter text-zinc-100"
        >
          contact me for I work with
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.1 }}
          className="text-zinc-400 text-lg max-w-2xl mx-auto"
        >
          For more information regarding my services and rates, or to discuss your project, please feel free to contact me.
        </motion.p>
      </div>

      <Card className="w-full max-w-[400px] border-none bg-[#E9E9E9] p-6 shadow-xl rounded-[40px]">
        <CardContent className="p-0">
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <div className="space-y-5">

              <Controller
                name="fullName"
                control={form.control}
                render={({ field, fieldState }) => (
                  <div className="space-y-2">
                    <Label className="text-[10px] font-#0f172a uppercase tracking-[0.15em] text-black">
                      Full Name
                    </Label>
                    <Input
                      {...field}
                      placeholder="John Doe"
                      className="h-14 border-none bg-[#F3F3F3] rounded-2xl px-4 text-gray-500 placeholder:text-gray-400 focus-visible:ring-1 focus-visible:ring-gray-300"
                    />
                    {fieldState.error && (
                      <p className="text-sm text-red-500">{fieldState.error.message}</p>
                    )}
                  </div>
                )}
              />

              <Controller
                name="email"
                control={form.control}
                render={({ field, fieldState }) => (
                  <div className="space-y-2">
                    <Label className="text-[10px] font-#0f172a uppercase tracking-[0.15em] text-black">
                      Email Address
                    </Label>
                    <Input
                      {...field}
                      type="email"
                      placeholder="john@example.com"
                      className="h-14 border-none bg-[#F3F3F3] rounded-2xl px-4 text-gray-500 placeholder:text-gray-400 focus-visible:ring-1 focus-visible:ring-gray-300"
                    />
                    {fieldState.error && (
                      <p className="text-sm text-red-500">{fieldState.error.message}</p>
                    )}
                  </div>
                )}
              />

              <Controller
                name="message"
                control={form.control}
                render={({ field, fieldState }) => (
                  <div className="space-y-2">
                    <Label className="text-[10px] font-#0f172a uppercase tracking-[0.15em] text-black">
                      Your Message
                    </Label>
                    <Textarea
                      {...field}
                      placeholder="Tell me about your project..."
                      className="min-h-[160px] border-none bg-[#F3F3F3] rounded-2xl p-4 resize-none text-gray-500 placeholder:text-gray-400 focus-visible:ring-1 focus-visible:ring-gray-300"
                    />
                    {fieldState.error && (
                      <p className="text-sm text-red-500">{fieldState.error.message}</p>
                    )}
                  </div>
                )}
              />
            </div>

            <Button
              type="submit"
             className="w-full h-16 bg-[#0f172a] text-white rounded-2xl hover:bg-[#1e293b] transition-all flex items-center justify-center gap-3 text-sm font-bold uppercase tracking-[0.2em]"
             >
              Send Message
              <Send className="w-4 h-4 rotate-[15deg]" />
            </Button>
          </form>
        </CardContent>
      </Card>
    </section>
  )
}

export default Contact