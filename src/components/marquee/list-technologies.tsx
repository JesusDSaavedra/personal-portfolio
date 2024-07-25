import { technologies } from '../../content/technologies'
import { cn } from "@/lib/utils";
import Marquee from "@/components/magicui/marquee";

type props = {
  title: string
  Icon: (props: React.SVGProps<SVGSVGElement>) => JSX.Element
  padding?: number
}


export const CardTech: React.FC<props> = ({  title, Icon, padding = 4 }) => {
  return (
    <figure
      className={cn(
        `p-${padding}`
      )}
    >
      <div className="flex flex-col items-center gap-2">
        <Icon className="w-10 h-10 fill-current" />
        <p className="text-xs font-semibold dark:text-white/60">{title}</p>
      </div>
    </figure>
  )
}
 
export function ListTechnologies() {
  return (
    <div 
      className="flex flex-col items-center justify-center overflow-hidden rounded-lg [mask-image:radial-gradient(_circle_at_center,white,transparent)] " 
      id='list-technologies'
    >
      <Marquee className="[--duration:40s]">
        {Object.values(technologies)
          .sort((a, b) => a.order - b.order)
          .map((item, index) => {
            const { title, Icon } = item
            return (
              <CardTech 
                key={index}
                title={title.toUpperCase()}
                Icon={Icon}
              />
            )
          })}
      </Marquee>
    </div>
  )
}