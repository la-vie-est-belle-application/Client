import { Badge } from "@shared/shadcn-ui/components";

export const SchedulePreviewCard = () => {
  return (
    <div className="border border-gray-200 rounded-lg p-3 mt-2">
      <div className="flex items-center justify-between mb-1">
        <p className="text-sm font-bold">2024년 12월 31일 (토)</p>
        <Badge className="bg-green-200 text-white rounded-sm">
          <span className="font-xs font-medium text-green-700">확정</span>
        </Badge>
      </div>

      <span className="text-xs text-gray-500 font-medium mr-1">9:00 AM</span>
      <span className="text-xs text-gray-500 font-medium">•</span>
      <span className="text-xs text-gray-500 font-medium ml-1">18:00 PM</span>
    </div>
  );
};
