import AntHoney from './AntHoney'
import NameHoverIndicator from './NameHoverIndicator'
import ScrollIndicator from './ScrollIndicator'

export default function MainSection() {
  return (
    <div className="flex flex-col justify-center items-center w-full h-svh">
      <AntHoney />
      <NameHoverIndicator />
      <ScrollIndicator />
    </div>
  )
}
