
import { MapPin, Clock, Building, DollarSign, Calendar, User } from 'lucide-react';

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
    <div className="bg-white rounded-3xl shadow-sm hover:shadow-xl transition-all duration-300 border border-purple-100 p-8 hover:border-purple-300 group">
      <div className="flex items-start justify-between mb-6">
        <div className="flex items-start space-x-4">
          <div className="bg-gradient-to-br from-teal-500 to-purple-600 w-16 h-16 rounded-full flex items-center justify-center">
            <User className="h-8 w-8 text-white" />
          </div>
          <div className="flex-1">
            <h3 className="text-xl font-bold text-purple-900 mb-2 group-hover:text-purple-700 cursor-pointer">
              {job.title}
            </h3>
            <div className="flex items-center text-gray-600 mb-2">
              <Building className="h-4 w-4 mr-2" />
              <span className="font-medium">{job.company}</span>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-end">
          <span className="bg-purple-100 text-purple-700 px-4 py-2 rounded-full text-sm font-medium mb-2">
            {job.area}
          </span>
          <span className="text-sm text-gray-500">{job.postedDate}</span>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
        <div className="flex items-center text-gray-600">
          <MapPin className="h-4 w-4 mr-2 text-gray-400" />
          <span>{job.location}</span>
        </div>
        <div className="flex items-center text-gray-600">
          <DollarSign className="h-4 w-4 mr-2 text-teal-500" />
          <span className="font-medium text-teal-600">{job.salary}</span>
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

      <p className="text-gray-600 mb-6 line-clamp-3">
        {job.description}
      </p>

      <div className="mb-6">
        <h4 className="font-medium text-purple-900 mb-3">Requisitos:</h4>
        <ul className="text-sm text-gray-600 space-y-2">
          {job.requirements.slice(0, 3).map((req, index) => (
            <li key={index} className="flex items-start">
              <span className="text-purple-500 mr-2">•</span>
              {req}
            </li>
          ))}
        </ul>
      </div>

      <div className="flex items-center justify-between pt-6 border-t border-purple-100">
        <div className="flex flex-wrap gap-2">
          {job.benefits.slice(0, 2).map((benefit, index) => (
            <span key={index} className="bg-teal-50 text-teal-700 px-3 py-1 rounded-full text-xs font-medium">
              {benefit}
            </span>
          ))}
        </div>
        <button
          onClick={() => onApply(job)}
          className="bg-gradient-to-r from-purple-600 to-teal-500 hover:from-purple-700 hover:to-teal-600 text-white px-8 py-3 rounded-2xl font-medium transition-all duration-300 transform hover:scale-105 shadow-lg"
        >
          Candidatar-se
        </button>
      </div>
    </div>
  );
};

export default JobCard;
