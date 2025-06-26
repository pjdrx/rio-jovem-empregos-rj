
import { MapPin, Clock, Building, DollarSign, Calendar } from 'lucide-react';

interface Job {
  id: number;
  title: string;
  company: string;
  location: string;
  salary: string;
  type: string;
  area: string;
  description: string;
  requirements: string[];
  benefits: string[];
  postedDate: string;
  applicationDeadline: string;
}

interface JobCardProps {
  job: Job;
  onApply: (job: Job) => void;
}

const JobCard = ({ job, onApply }: JobCardProps) => {
  return (
    <div className="bg-white rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100 p-6 hover:border-blue-200">
      <div className="flex items-start justify-between mb-4">
        <div className="flex-1">
          <h3 className="text-xl font-semibold text-gray-900 mb-2 hover:text-blue-600 cursor-pointer">
            {job.title}
          </h3>
          <div className="flex items-center text-gray-600 mb-2">
            <Building className="h-4 w-4 mr-2" />
            <span className="font-medium">{job.company}</span>
          </div>
        </div>
        <div className="flex flex-col items-end">
          <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm font-medium mb-2">
            {job.area}
          </span>
          <span className="text-sm text-gray-500">{job.postedDate}</span>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
        <div className="flex items-center text-gray-600">
          <MapPin className="h-4 w-4 mr-2 text-gray-400" />
          <span>{job.location}</span>
        </div>
        <div className="flex items-center text-gray-600">
          <DollarSign className="h-4 w-4 mr-2 text-green-500" />
          <span className="font-medium text-green-600">{job.salary}</span>
        </div>
        <div className="flex items-center text-gray-600">
          <Clock className="h-4 w-4 mr-2 text-gray-400" />
          <span>{job.type}</span>
        </div>
        <div className="flex items-center text-gray-600">
          <Calendar className="h-4 w-4 mr-2 text-gray-400" />
          <span>Até {job.applicationDeadline}</span>
        </div>
      </div>

      <p className="text-gray-600 mb-4 line-clamp-3">
        {job.description}
      </p>

      <div className="mb-4">
        <h4 className="font-medium text-gray-900 mb-2">Requisitos:</h4>
        <ul className="text-sm text-gray-600 space-y-1">
          {job.requirements.slice(0, 3).map((req, index) => (
            <li key={index} className="flex items-start">
              <span className="text-blue-500 mr-2">•</span>
              {req}
            </li>
          ))}
        </ul>
      </div>

      <div className="flex items-center justify-between pt-4 border-t border-gray-100">
        <div className="flex flex-wrap gap-2">
          {job.benefits.slice(0, 2).map((benefit, index) => (
            <span key={index} className="bg-green-50 text-green-700 px-2 py-1 rounded text-xs">
              {benefit}
            </span>
          ))}
        </div>
        <button
          onClick={() => onApply(job)}
          className="bg-gradient-to-r from-blue-600 to-green-600 hover:from-blue-700 hover:to-green-700 text-white px-6 py-2 rounded-lg font-medium transition-all duration-300 transform hover:scale-105"
        >
          Candidatar-se
        </button>
      </div>
    </div>
  );
};

export default JobCard;
