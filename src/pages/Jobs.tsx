import { useState } from 'react';
import Header from '../components/Header';
import HeroSection from '../components/HeroSection';
import FilterSection from '../components/FilterSection';
import JobCard from '../components/JobCard';
import ApplicationModal from '../components/ApplicationModal';
import Footer from '../components/Footer';
import { jobs, Job } from '../data/jobs';

const Jobs = () => {
  const [filteredJobs, setFilteredJobs] = useState<Job[]>(jobs);
  const [selectedJob, setSelectedJob] = useState<Job | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [filters, setFilters] = useState({
    location: 'Todas as regiões',
    area: 'Todas as áreas',
    type: 'Todos os tipos'
  });
  const [searchQuery, setSearchQuery] = useState('');
  const [searchLocation, setSearchLocation] = useState('');

  const handleSearch = (query: string, location: string) => {
    setSearchQuery(query);
    setSearchLocation(location);
    filterJobs(query, location, filters);
  };

  const handleFilterChange = (key: string, value: string) => {
    const newFilters = { ...filters, [key]: value };
    setFilters(newFilters);
    filterJobs(searchQuery, searchLocation, newFilters);
  };

  const handleClearFilters = () => {
    const clearedFilters = {
      location: 'Todas as regiões',
      area: 'Todas as áreas',
      type: 'Todos os tipos'
    };
    setFilters(clearedFilters);
    setSearchQuery('');
    setSearchLocation('');
    setFilteredJobs(jobs);
  };

  const filterJobs = (query: string, location: string, currentFilters: typeof filters) => {
    let filtered = jobs;

    // Filter by search query
    if (query.trim()) {
      filtered = filtered.filter(job =>
        job.title.toLowerCase().includes(query.toLowerCase()) ||
        job.company.toLowerCase().includes(query.toLowerCase()) ||
        job.area.toLowerCase().includes(query.toLowerCase()) ||
        job.description.toLowerCase().includes(query.toLowerCase())
      );
    }

    // Filter by search location
    if (location.trim()) {
      filtered = filtered.filter(job =>
        job.location.toLowerCase().includes(location.toLowerCase())
      );
    }

    // Filter by location
    if (currentFilters.location !== 'Todas as regiões') {
      filtered = filtered.filter(job =>
        job.location.toLowerCase().includes(currentFilters.location.toLowerCase())
      );
    }

    // Filter by area
    if (currentFilters.area !== 'Todas as áreas') {
      filtered = filtered.filter(job =>
        job.area.toLowerCase() === currentFilters.area.toLowerCase()
      );
    }

    // Filter by type
    if (currentFilters.type !== 'Todos os tipos') {
      filtered = filtered.filter(job =>
        job.type.toLowerCase() === currentFilters.type.toLowerCase()
      );
    }

    setFilteredJobs(filtered);
  };

  const handleApply = (job: Job) => {
    setSelectedJob(job);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedJob(null);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <HeroSection onSearch={handleSearch} />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <FilterSection
          filters={filters}
          onFilterChange={handleFilterChange}
          onClearFilters={handleClearFilters}
        />

        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold text-gray-900">
            {filteredJobs.length} {filteredJobs.length === 1 ? 'vaga encontrada' : 'vagas encontradas'}
          </h2>
          {(searchQuery || searchLocation || filters.location !== 'Todas as regiões' || filters.area !== 'Todas as áreas' || filters.type !== 'Todos os tipos') && (
            <div className="text-sm text-gray-600">
              {searchQuery && <span className="bg-blue-100 text-blue-700 px-2 py-1 rounded mr-2">"{searchQuery}"</span>}
              {searchLocation && <span className="bg-green-100 text-green-700 px-2 py-1 rounded mr-2">{searchLocation}</span>}
              {filters.location !== 'Todas as regiões' && <span className="bg-purple-100 text-purple-700 px-2 py-1 rounded mr-2">{filters.location}</span>}
              {filters.area !== 'Todas as áreas' && <span className="bg-orange-100 text-orange-700 px-2 py-1 rounded mr-2">{filters.area}</span>}
              {filters.type !== 'Todos os tipos' && <span className="bg-pink-100 text-pink-700 px-2 py-1 rounded mr-2">{filters.type}</span>}
            </div>
          )}
        </div>

        {filteredJobs.length === 0 ? (
          <div className="text-center py-12">
            <div className="text-gray-400 mb-4">
              <svg className="mx-auto h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.172 16.172a4 4 0 015.656 0M9 12h6m-6-4h6m2 5.291A7.962 7.962 0 0112 15c-2.34 0-4.29.82-5.877 2.172M3 12a9 9 0 1018 0 9 9 0 00-18 0z" />
              </svg>
            </div>
            <h3 className="text-lg font-medium text-gray-900 mb-1">Nenhuma vaga encontrada</h3>
            <p className="text-gray-500 mb-4">
              Tente ajustar os filtros ou termos de busca para encontrar mais vagas.
            </p>
            <button
              onClick={handleClearFilters}
              className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition-colors"
            >
              Limpar Filtros
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {filteredJobs.map((job) => (
              <JobCard key={job.id} job={job} onApply={handleApply} />
            ))}
          </div>
        )}
      </div>

      <Footer />

      {selectedJob && (
        <ApplicationModal
          job={selectedJob}
          isOpen={isModalOpen}
          onClose={handleCloseModal}
        />
      )}
    </div>
  );
};

export default Jobs;