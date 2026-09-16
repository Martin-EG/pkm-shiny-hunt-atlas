import { Sparkle, Text } from "glamui-react";


const ShinyHuntProgress = () => {

  return (
    <div className="flex items-center space-x-4 gap-4">
        <div className="flex gap-2">
          <Sparkle size="md" color="#FFC62E" />
          <Text variant="body" size="sm">
             0 / 1081
          </Text>
        </div>
      <progress className="progress progress-warning w-30" value={50} max="1081"></progress>
    </div>
  )
};

export default ShinyHuntProgress;